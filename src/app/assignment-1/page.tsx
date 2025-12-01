"use client";
import React from "react";

const inputText = `
<p><strong>Admit Date:</strong> 08/11/2024</p>
<p><strong>Attending Physician:</strong> Dr. R. Lewis, MD</p>

<p><strong>Chief Complaint:</strong><br/>
Abdominal pain</p>

<p><strong>Major Surgical or Invasive Procedures:</strong><br/>
None reported</p>

<p><strong>History of Present Illness:</strong><br/>
Mr. Karan Sharma is a 46-year-old male presenting to the ED due to right and left lower abdominal pain for the past 3 days. The patient reports that the pain began gradually but has become <em>sharp and worsening abdominal pain</em> since yesterday evening. He describes the location as mostly <em>left lower quadrant</em> but occasionally radiates to the periumbilical region.</p>

<p>The patient mentions experiencing <em>decreased bowel movements</em> for the last 2 days, and his last movement was small and difficult to pass. He denies blood in stool, vomiting, or diarrhea. He reports mild nausea but no episodes of vomiting. No history of recent travel or outside food intake.</p>

<p><strong>Past Medical History:</strong></p>
<ul>
  <li>Diabetes Mellitus Type II (diagnosed 2018)</li>
  <li>Hypertension</li>
  <li>Hyperlipidemia</li>
</ul>

<p><strong>Past Surgical History:</strong><br/>
No previous abdominal surgeries</p>

<p><strong>Family History:</strong></p>
<ul>
  <li>Father: Hypertension</li>
  <li>Mother: Type II Diabetes</li>
</ul>

<p><strong>Social History:</strong><br/>
Non-smoker, drinks alcohol occasionally, works as an accountant with a mostly sedentary lifestyle.</p>

<p><strong>Review of Systems:</strong></p>
<p><strong>General:</strong> Patient reports fatigue and poor appetite.<br/>
<strong>GI:</strong> Reports sharp abdominal pain, decreased bowel movements, nausea.<br/>
<strong>Respiratory:</strong> No shortness of breath.<br/>
<strong>Cardiac:</strong> No chest pain or palpitations.</p>

<p><strong>Physical Examination:</strong></p>
<p><strong>Vitals:</strong><br/>
Temp: 98.4°F<br/>
Pulse: 96 bpm<br/>
Resp: 18/min<br/>
BP: 138/84 mmHg<br/>
SpO2: 98% on room air</p>

<p><strong>Abdominal Examination:</strong><br/>
Abdomen soft but tender on deep palpation, especially in the <em>left lower quadrant</em>. Guarding noted but no rebound tenderness. Bowel sounds present but <em>hypoactive</em>. Mild distention observed.</p>

<p><strong>Laboratory Results:</strong><br/>
CBC shows <em>mild leukocytosis</em> (WBC: 12.8 x10^9/L).<br/>
CRP slightly elevated.<br/>
Electrolytes within normal limits.<br/>
Urinalysis normal.</p>

<p><strong>Imaging:</strong><br/>
CT scan of abdomen and pelvis indicates <em>mild sigmoid colon wall thickening</em>, suggestive of <em>early diverticulitis</em>. No abscess formation, no perforation. Small amount of <em>inflammatory stranding</em> present.</p>

<p><strong>Assessment & Plan:</strong><br/>
- Suspected uncomplicated diverticulitis causing sharp abdominal pain and decreased bowel movements.<br/>
- Start patient on oral antibiotics (ciprofloxacin + metronidazole).<br/>
- Advise clear liquid diet for 24–48 hours.<br/>
- Reassess pain progression and bowel movements.</p>

<p><strong>Patient Education:</strong><br/>
Discussed warning signs including fever, inability to tolerate fluids, severe worsening pain, or blood in stool. Patient advised to return to ED if symptoms worsen.</p>

<p><strong>Follow-Up:</strong><br/>
OPD follow-up in 48 hours.</p>
`;

const outputText = `
<p><strong>Clinical Summary:</strong></p>

<p>
The patient is a 46-year-old male presenting with 
<em>sharp and worsening abdominal pain</em> for the last 3 days, 
mainly localized to the <em>left lower quadrant</em>. 
He additionally reports <em>decreased bowel movements</em> 
and mild nausea.
</p>

<p>
On physical examination, tenderness is noted in the 
<em>left lower quadrant</em> with mild guarding and 
<em>hypoactive</em> bowel sounds.
</p>

<p>
A CT scan of the abdomen reveals 
<em>mild sigmoid colon wall thickening</em> with surrounding 
<em>inflammatory stranding</em>, consistent with 
<em>early diverticulitis</em>. 
No perforation or abscess is seen.
</p>

<p>
Laboratory findings show <em>mild leukocytosis</em> and elevated CRP, 
indicating infection or inflammation.
</p>

<p>
The patient is started on oral antibiotics and advised to follow a 
clear liquid diet for 24–48 hours. They were instructed to monitor 
for worsening symptoms including severe abdominal pain, fever, or 
blood in stool.
</p>

<p>
A follow-up appointment is scheduled in 48 hours to reevaluate 
abdominal pain and bowel movements.
</p>
`;

const phrases = [
  "sharp and worsening abdominal pain",
  "left lower quadrant",
  "decreased bowel movements",
  "hypoactive",
  "mild leukocytosis",
  "mild sigmoid colon wall thickening",
  "early diverticulitis",
  "inflammatory stranding",
];

export default function Assignment1Page() {
  const inputRef = React.useRef<HTMLDivElement | null>(null);
  const outputRef = React.useRef<HTMLDivElement | null>(null);
  const [inputHTML, setInputHTML] = React.useState<string | null>(null);
  const [outputHTML, setOutputHTML] = React.useState<string | null>(null);

  const wrapPhrasesWithSpan = (html: string, type: "input" | "output") => {
    phrases.forEach((phrase, idx) => {
      const span =
        type === "input"
          ? `<span id="map-${idx}" class="">${phrase}</span>`
          : `<span data-id="${idx}" class="bg-orange-300 font-semibold cursor-pointer hover:bg-orange-400 transition">${phrase}</span>`;

      html = html.replace(phrase, span);
    });
    return html;
  };

  const onSpanClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    if (!el.dataset.id) return;
    const id = el.dataset.id;
    if (!id) return;

    const inputElement = inputRef.current?.querySelector(`#map-${id}`);
    inputElement?.classList.add("highlight-input", "animate-pulse-slower");

    setTimeout(() => {
      inputElement?.classList.remove("highlight-input", "animate-pulse-slower");
    }, 4000);

    if (inputElement) {
      inputElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  React.useEffect(() => {
    setInputHTML(wrapPhrasesWithSpan(inputText, "input"));
    setOutputHTML(wrapPhrasesWithSpan(outputText, "output"));
  }, []);

  return (
    <div className="w-full md:w-[70%] h-200  grid md:grid-cols-2 gap-4 grid-cols-1">
      <div
        className="h-full rounded-md shadow-sm border border-stone-200 bg-stone-100 p-6 text-stone-900 w-full max-w-3xl overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: inputHTML ?? "" }}
        ref={inputRef}
      ></div>

      {/* RIGHT */}
      <div
        className="h-full rounded-md shadow-sm border border-stone-200 bg-stone-100 p-6 text-stone-900 w-full max-w-3xl overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: outputHTML ?? "" }}
        ref={outputRef}
        onClick={onSpanClick}
      ></div>
    </div>
  );
}
