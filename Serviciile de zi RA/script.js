/* =========================
   LISTA PERSONALULUI
========================= */
const persoane = [
  "Din altă subunitate",

  "lt.col. Bordea Andrei",
  "lt. Bodiu Sergiu",
  "lt. Dermindje Mihail",
  "lt. Samoschin Anton",

  "sg.II Plugaru Iurie",
  "sg.III Botnari Anastasia",
  "sg.III Murafa Oleg",
  "sg.III Ungureanu Andrei",
  "sg.III Zamaneagra Aliona",

  "cap. Boțoc Dumitru",

  "sold.I Macovei Natalia",
  "sold.I Răileanu Marina",
  "sold.I Rotari Natalia",
  "sold.I Smirnov Silvia",
  "sold.I Tuceacov Nicolae",
  "sold.I Pinzari Vladimir",

  "sold.II Cucer Oxana",

  "sold.III Roler Ira",
  "sold.III Vovc Dan"
];

/* =========================
   SERVICII
========================= */
const functii = [
  "Ajutor OSU",
  "Sergent de serviciu PCT",
  "Planton",
  "Patrulă",
  "Operator radio",
  "Intervenția 1",
  "Intervenția 2",
  "Responsabil"
];

/* =========================
   REGULI PE SERVICII
========================= */
const reguliServicii = {
  "Ajutor OSU": [
    "lt.col. Bordea Andrei",
    "lt. Bodiu Sergiu",
    "lt. Dermindje Mihail",
    "lt. Samoschin Anton"
  ],
   
  "Sergent de serviciu PCT": [
    "sg.II Plugaru Iurie",
    "sg.III Zamaneagra Aliona",
    "sg.III Murafa Oleg",
    "cap. Boțoc Dumitru",
    "sold.I Pinzari Vladimir"
  ],

  "Planton": [
    "sold.II Cucer Oxana",
    "sold.III Roler Ira"
  ],

  "Patrulă": [
    "sold.I Tuceacov Nicolae",
    "sold.III Vovc Dan"
  ],

  "Operator radio": [
    "sg.III Ungureanu Andrei",
    "sg.III Botnari Anastasia",
    "sold.I Smirnov Silvia"
  ],

  "Intervenția 1": persoane.filter(p => p !== "Din altă subunitate"),
  "Intervenția 2": persoane.filter(p => p !== "Din altă subunitate"),
   
  "Responsabil": [
    "lt.col. Bordea Andrei"
  ]
};

/* =========================
   CALENDAR AUTOMAT
   (IERI + 6 zile = 7)
========================= */
function genereazaZile(nr = 7) {
  const zile = [];
  const azi = new Date();

  const start = new Date(azi);
  start.setDate(azi.getDate() - 1); // IERI

  for (let i = 0; i < nr; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    zile.push(
      d.toLocaleDateString("ro-RO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
    );
  }

  return zile;
}

const zile = genereazaZile(7);

/* =========================
   CULOARE AUTOMATĂ
========================= */
const culori = {};
function culoarePentru(text) {
  if (text === "Din altă subunitate") return "#e5e7eb";
  if (!culori[text]) {
    const h = Math.floor(Math.random() * 360);
    culori[text] = `hsl(${h},70%,80%)`;
  }
  return culori[text];
}

/* =========================
   STORAGE
========================= */
const container = document.getElementById("cards");
const storage = JSON.parse(localStorage.getItem("servicii")) || {};

/* =========================
   VERIFICARE DUBLURI
========================= */
function esteDejaAtribuit(zi, persoana, idxCurent) {
  if (!storage[zi]) return false;

  return storage[zi].some(
    (p, idx) =>
      idx !== idxCurent &&
      p === persoana &&
      persoana !== "Din altă subunitate"
  );
}

/* =========================
   SELECT CU REGULI
========================= */
function creareSelect(zi, idx, functie) {
  const select = document.createElement("select");

  // opțiune implicită
  const optDefault = document.createElement("option");
  optDefault.value = "Din altă subunitate";
  optDefault.textContent = "Din altă subunitate";
  select.appendChild(optDefault);

  (reguliServicii[functie] || []).forEach(p => {
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    opt.style.background = culoarePentru(p);
    select.appendChild(opt);
  });

  const valoare = storage?.[zi]?.[idx] || "Din altă subunitate";
  select.value = valoare;
  select.style.background = culoarePentru(valoare);

  select.onchange = () => {
    if (esteDejaAtribuit(zi, select.value, idx)) {
      alert("⚠️ Această persoană este deja la un serviciu în această zi!");
      select.value = "Din altă subunitate";
      select.style.background = culoarePentru("Din altă subunitate");
      return;
    }

    storage[zi] = storage[zi] || [];
    storage[zi][idx] = select.value;
    select.style.background = culoarePentru(select.value);
    localStorage.setItem("servicii", JSON.stringify(storage));
  };

  return select;
}

/* =========================
   IERI / AZI / MÂINE
========================= */
const azi = new Date();
const ieri = new Date(azi);
ieri.setDate(azi.getDate() - 1);

const maine = new Date(azi);
maine.setDate(azi.getDate() + 1);

function dataText(d) {
  return d.toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

const ieriText = dataText(ieri);
const aziText = dataText(azi);
const maineText = dataText(maine);

/* =========================
   AFIȘARE CARDURI
========================= */
zile.forEach(zi => {
  const card = document.createElement("div");
  card.className = "card";

  let eticheta = "";

  if (zi === ieriText) {
    card.classList.add("ieri");
    eticheta = " (IERI)";
  }

  if (zi === aziText) {
    card.classList.add("azi");
    eticheta = " (AZI)";
  }

  if (zi === maineText) {
    card.classList.add("maine");
    eticheta = " (MÂINE)";
  }

  card.innerHTML = `<h2>📅 ${zi}${eticheta}</h2>`;

  functii.forEach((f, i) => {
    const row = document.createElement("div");
    row.className = "row";

    const label = document.createElement("span");
    label.textContent = f;

    row.appendChild(label);
    row.appendChild(creareSelect(zi, i, f));
    card.appendChild(row);
  });

  container.appendChild(card);
});
