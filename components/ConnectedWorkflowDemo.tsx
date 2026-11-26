"use client";

import { useState } from "react";

const scenarios = [
  {
    id: "inquiry",
    name: "Customer inquiry",
    eyebrow: "Website → CRM → Operations → Reporting",
    stages: [
      { heading: "Website", label: "An inquiry comes in", detail: "A visitor requests a quote through a structured form.", fields: [["Service", "Equipment inquiry"], ["Contact", "Sample customer"], ["Request", "Quote needed"]] },
      { heading: "CRM", label: "Information becomes useful", detail: "A contact, company and opportunity can be matched or created using clear rules.", fields: [["Contact record", "Matched / created"], ["Deal", "Qualification"], ["Owner", "Assigned by rule"]] },
      { heading: "Automation", label: "The right handoff happens", detail: "Validation, notifications and task creation keep the request moving.", fields: [["Validation", "Passed"], ["Team notification", "Prepared"], ["Next action", "Follow up"]] },
      { heading: "Reporting", label: "Progress is visible", detail: "A dashboard can show status, ownership and unresolved requests.", fields: [["Pipeline", "Inquiry"], ["Visibility", "Team dashboard"], ["Exceptions", "Flagged for review"]] },
    ],
  },
  {
    id: "field",
    name: "Field operations",
    eyebrow: "Request → Scheduling → Field team → Visibility",
    stages: [
      { heading: "Intake", label: "Work is requested", detail: "A new service request arrives with location and service requirements.", fields: [["Location", "Sample territory"], ["Job type", "Site visit"], ["Requested date", "To schedule"]] },
      { heading: "Scheduling", label: "Capacity is checked", detail: "The workflow reviews available slots and eligibility before assignment.", fields: [["Territory", "Matched"], ["Capacity", "Checked"], ["Slot", "Reserved in demo"]] },
      { heading: "Assignment", label: "The field team gets context", detail: "The assigned representative receives the relevant work details.", fields: [["Assignment", "Field representative"], ["Status", "Ready for visit"], ["Instructions", "Attached"]] },
      { heading: "Visibility", label: "Operations can monitor progress", detail: "Work status and exceptions are available without a separate spreadsheet.", fields: [["Activity", "Visible"], ["Exception", "None in demo"], ["Follow-through", "Tracked"]] },
    ],
  },
] as const;

export function ConnectedWorkflowDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [step, setStep] = useState(0);
  const scenario = scenarios[scenarioIndex];
  const current = scenario.stages[step];

  function selectScenario(index: number) {
    setScenarioIndex(index);
    setStep(0);
  }

  return (
    <div className="cx-demo">
      <div className="cx-demo-toolbar">
        <div className="cx-demo-live"><span aria-hidden="true" /> INTERACTIVE EXAMPLE</div>
        <div className="cx-demo-selector" role="group" aria-label="Choose workflow">
          {scenarios.map((item, index) => (
            <button key={item.id} type="button" className={scenarioIndex === index ? "cx-demo-scenario is-selected" : "cx-demo-scenario"} aria-pressed={scenarioIndex === index} onClick={() => selectScenario(index)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="cx-demo-introduction">
        <div>
          <span className="cx-demo-overline">CONNECTED WORKFLOW / {String(scenarioIndex+1).padStart(2,"0")}</span>
          <h3>{scenario.name}<span className="cx-demo-period">.</span></h3>
          <p>{scenario.eyebrow}</p>
        </div>
        <span className="cx-demo-example-note">SIMULATED DATA · ILLUSTRATIVE LOGIC</span>
      </div>

      <div className="cx-demo-track" role="group" aria-label="Select workflow stage">
        {scenario.stages.map((item,index) => (
          <button type="button" key={item.heading} className={step===index?"cx-demo-node is-current":"cx-demo-node"} aria-pressed={step===index} onClick={()=>setStep(index)}>
            <span className="cx-demo-node-count">0{index+1}</span>
            <strong>{item.heading}</strong>
            <span className="cx-demo-node-arrow" aria-hidden="true">{index<scenario.stages.length-1?"→":"↗"}</span>
          </button>
        ))}
      </div>

      <div className="cx-demo-detail" aria-live="polite" aria-atomic="true">
        <div className="cx-demo-detail-copy">
          <span className="cx-demo-overline">STEP 0{step+1} / {String(scenario.stages.length).padStart(2,"0")}</span>
          <h4>{current.label}</h4>
          <p>{current.detail}</p>
          <div className="cx-demo-controls">
            <button type="button" onClick={()=>setStep(i=>Math.max(0,i-1))} disabled={step===0} aria-label="Previous stage">← Previous</button>
            <button type="button" onClick={()=>setStep(i=>Math.min(scenario.stages.length-1,i+1))} disabled={step===scenario.stages.length-1}>Next stage →</button>
          </div>
        </div>
        <div className="cx-demo-record" aria-label="Example data at selected stage">
          <div className="cx-demo-record-top"><span>WORKFLOW RECORD</span><span>DEMO / 001</span></div>
          {current.fields.map(([label,value])=><div className="cx-demo-record-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          <div className="cx-demo-record-bottom"><span className="cx-demo-record-indicator"/> {current.heading.toUpperCase()} STAGE</div>
        </div>
      </div>
      <p className="cx-demo-disclaimer">This is a conceptual interactive demonstration of system design—not a live integration, a client environment or a claim about automated functionality already deployed.</p>
    </div>
  );
}
