import Chess from 'chess.js'



const stockFishWorker = (file, action) => () => {
    const stockfish = new Worker(file);
  
    let resolver = null;
  
    stockfish.addEventListener("message", e => {
        const move = e.data.match(/^bestmove\s([a-h][1-8])([a-h][1-8])/);
        if (move && resolver) {
            resolver({ from: move[1], to: move[2] });
            resolver = null;
        }
    });
  
    return fen =>
        new Promise(res => {
            resolver = res;
            stockfish.postMessage(`position fen ${fen}`);
            stockfish.postMessage(action);
        });
};
  
export const stockFishJsMoveWithDepth = depth =>
    stockFishWorker("stockfish.js", `go depth ${depth}`);
  
export const stockFishWasmMoveWithDepth = depth =>
    stockFishWorker("stockfish.wasm.js", `go depth ${depth}`);

export const stockFishWasmLine = () =>
    stockFishWorker("stockfish.wasm.js", `info pv`);

export const stockFishWasmScoreCP = () =>
    stockFishWorker("stockfish.wasm.js", `info score cp`);

export const stockFishWasmScoreMate = () =>
    stockFishWorker("stockfish.wasm.js", `info score mate`);

  