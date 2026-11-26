/* Road to Sub 40 - partial workout logging patch
   Add these UI/data concepts to the existing app while preserving current localStorage data.

Data shape per planned workout:
trainingLog[id] = {
  status: "complete" | "partial" | "missed",
  plannedMinutes: 24,
  blocks: ["6:30","8:00","2:00"],
  targetPaceHit: true,
  reasons: ["weather","mental"],
  note: "Koud, baan glad. Tempo voelde haalbaar, maar mentaal gestopt."
}
*/

const RTS40_LOG_KEY = "roadToSub40.trainingLog.v1";
function rts40LoadLog(){try{return JSON.parse(localStorage.getItem(RTS40_LOG_KEY)||"{}")}catch{return {}}}
function rts40SaveLog(log){localStorage.setItem(RTS40_LOG_KEY,JSON.stringify(log))}
function rts40TimeToSeconds(v){const a=String(v).trim().split(":").map(Number);return a.length===2?a[0]*60+a[1]:(Number(v)||0)*60}
function rts40Summary(entry){
 const actual=(entry.blocks||[]).reduce((s,v)=>s+rts40TimeToSeconds(v),0);
 const planned=(Number(entry.plannedMinutes)||0)*60;
 const pct=planned?Math.min(100,Math.round(actual/planned*100)):0;
 return {actual,pct,text:`${Math.floor(actual/60)}:${String(actual%60).padStart(2,"0")} van ${entry.plannedMinutes||0}:00 min`};
}
window.RTS40TrainingLog={load:rts40LoadLog,save:rts40SaveLog,summary:rts40Summary};
