"use client";

import { useMemo, useState } from "react";

export default function ReadinessTool() {
  const [area, setArea] = useState(1200);
  const [weeks, setWeeks] = useState(8);
  const [locations, setLocations] = useState(1);

  const score = useMemo(() => {
    const areaLoad = area > 1800 ? 18 : area > 1000 ? 10 : 4;
    const timeLoad = weeks < 7 ? 22 : weeks < 10 ? 12 : 4;
    const rolloutLoad = locations > 4 ? 18 : locations > 1 ? 10 : 3;
    return Math.min(100, 100 - areaLoad - timeLoad - rolloutLoad);
  }, [area, weeks, locations]);

  const band = score > 72 ? "Controlled" : score > 54 ? "Watchlist" : "High Intervention";

  return (
    <section className="readiness">
      <div>
        <p className="eyebrow">Project readiness estimator</p>
        <h2>Pressure-test a rollout before the site clock starts.</h2>
        <p>
          Placeholder tool for lead generation. Later this can connect to a CRM,
          produce downloadable readiness notes, or trigger a project discovery call.
        </p>
      </div>
      <div className="toolPanel">
        <label>
          Built-up area: {area} sq ft
          <input
            type="range"
            min="400"
            max="3000"
            step="100"
            value={area}
            onChange={(event) => setArea(Number(event.target.value))}
          />
        </label>
        <label>
          Target duration: {weeks} weeks
          <input
            type="range"
            min="4"
            max="18"
            value={weeks}
            onChange={(event) => setWeeks(Number(event.target.value))}
          />
        </label>
        <label>
          Locations in pipeline: {locations}
          <input
            type="range"
            min="1"
            max="10"
            value={locations}
            onChange={(event) => setLocations(Number(event.target.value))}
          />
        </label>
        <div className="scoreCard">
          <span>Readiness score</span>
          <strong>{score}</strong>
          <p>{band}</p>
        </div>
      </div>
    </section>
  );
}
