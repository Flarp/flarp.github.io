const $ = document.getElementById.bind(document)

const ctx = new AudioContext()

const PRESETS = [
    ["Decreasing beat presence", [15, 15, 14, 14, 12, 12, 8, 8, 0, 0]],
    ["Stagger", [10]],
    ["Longetivity", [15, 0, 0, 0]]
]

let fileBuf

const load = async (filename) => {
    try {
        const res = await fetch("audio/" + filename + ".flac")

        const buf = await res.arrayBuffer()

        const almostRet = await ctx.decodeAudioData(buf)

        return almostRet.getChannelData(0)
    } catch (e) {
        throw new Error("crap!")
    }
}

for (let i = 0; i < PRESETS.length; i++) {
    const opt = document.createElement("option")
    opt.value = i
    opt.textContent = PRESETS[i][0]

    $("preset").appendChild(opt)
}

const createBuffer = (bpm, presetList, clickArr) => {

    const tapLength = Math.floor((ctx.sampleRate * 60) / bpm)
    const presetLength = presetList.length
    const barCount = tapLength * 4
    const sampleCount = barCount * 4 * presetLength

    const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate)
    const barBuffer = ctx.createBuffer(1, barCount, ctx.sampleRate)

    for (let k = 0; k < 4; k++) {
        barBuffer.copyToChannel(clickArr, 0, tapLength * k)
    }

    const barArr = barBuffer.getChannelData(0)

    let offset = 0

    for (let i = 0; i < presetLength; i++) {

        for (let j = 0; j < 4; j++) {
            if (((1 << (3 - j)) & presetList[i]) !== 0) {
                buffer.copyToChannel(barArr, 0, offset)
            }

            offset += barCount
        }

    }

    return buffer
}

let bufferSource
let started = false

const start = async () => {
    started = true

    const bpm = Number($("slider-reflection").value)
    const fileBuf = await load($("sound").value)
    const preset = Number($("preset").value)

    $("start").textContent = "Stop"

    bufferSource = ctx.createBufferSource()
    bufferSource.buffer = createBuffer(bpm, PRESETS[preset][1], fileBuf)
    bufferSource.loop = true
    bufferSource.connect(ctx.destination)
    bufferSource.start()
}

const stop = () => {
    bufferSource.stop()
    $("start").textContent = "Start"
}

$("start").onclick = () => {
    if (started) {
        started = false
        stop()
    } else {
        started = true
        start()
    }
}

$("slider-reflection").onchange = e => {
    $("slider").value = Number(e.target.value)
    stop()
    start()
}

$("slider").onchange = e => {
    $("slider-reflection").value = Number(e.target.value)
    stop()
    start()
}