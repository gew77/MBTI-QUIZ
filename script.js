// Soal dan data tetap sama seperti sebelumnya
const questions = [
  { text: "Weekend ideal kamu?", a: "Party kecil bareng circle", b: "Me time sambil scroll TikTok atau nonton series", trait: "EI" },
  { text: "Lagi capek, kamu recharge dengan?", a: "Ngobrol, nongkrong santai", b: "Ngilang sebentar, off dulu", trait: "EI" },
  { text: "First day di tempat baru, kamu?", a: "Langsung sapa orang, coba akrab", b: "Observasi dulu, baru pelan-pelan nyambung", trait: "EI" },
  { text: "Lagi bete, kamu curhat ke?", a: "Siapa aja yang bisa denger", b: "Paling ke diary atau chat notes", trait: "EI" },
  { text: "Kalau meeting Zoom rame, kamu?", a: "Angkat tangan, kasih opini", b: "Diam, nunggu ditanya", trait: "EI" },
  { text: "Kalau dikasih tugas kreatif, kamu?", a: "Tanya dulu format, deadline, dll", b: "Langsung mikir konsep aneh tapi keren", trait: "SN" },
  { text: "Baca caption panjang, kamu?", a: "Fokus ke fakta dan info real", b: "Tangkap vibes dan makna tersembunyi", trait: "SN" },
  { text: "Waktu ambil keputusan, kamu?", a: "Berdasarkan pengalaman yang udah ada", b: "Feeling dan intuisi sih, kayaknya bakal works", trait: "SN" },
  { text: "Kalau bikin goal, kamu?", a: "Step by step, realistis", b: "Vision besar dulu, nanti mikir jalan", trait: "SN" },
  { text: "Liat trend baru, kamu?", a: "Cari tahu step-by-step cara ikutan", b: "Langsung modifikasi biar beda", trait: "SN" },
  { text: "Ada temen minta saran, kamu?", a: "Kasih solusi logis", b: "Dengerin dulu, empati mode on", trait: "TF" },
  { text: "Kalau dikritik, kamu?", a: "Ambil poin penting, gas perbaiki", b: "Kepikiran sih, tapi sambil mikir “kok gitu ya?”", trait: "TF" },
  { text: "Lagi diskusi panas, kamu?", a: "Fokus ke argumen yang masuk akal", b: "Perhatiin juga perasaan orang", trait: "TF" },
  { text: "Pilih partner kerja?", a: "Yang kerja cepet dan efisien", b: "Yang suportif dan satu frekuensi", trait: "TF" },
  { text: "Kalau bikin keputusan besar?", a: "List pro-kontra", b: "Tanya hati kecil", trait: "TF" },
  { text: "Cara kerja kamu lebih ke?", a: "Deadline rapi, checklist jalan", b: "Kerjain pas mood dateng", trait: "JP" },
  { text: "Plan liburan, kamu?", a: "Itinerary fix dari awal", b: "Jalanin aja, liat nanti", trait: "JP" },
  { text: "Tipe organize kamu?", a: "Folder rapi, note warna-warni", b: "Semua ada di kepala (kadang lupa, tapi hidup terus)", trait: "JP" },
  { text: "Ada project penting, kamu?", a: "Mulai jauh hari biar aman", b: "Ngerjain last minute, tapi jadi juga kok", trait: "JP" },
  { text: "Hidup ideal versi kamu?", a: "Teratur, jelas tujuannya", b: "Fleksibel, yang penting happy", trait: "JP" }
];

const mbtiTypes = {
  "ENFP": {
    desc: "Kamu anaknya random tapi penuh ide gila yang bisa bikin semua orang happy. Hidup buat kamu itu eksplorasi dan koneksi. Kadang chaos, tapi selalu penuh warna.",
    vibes: "😜🌟🔥 “YOLO, but make it deep”",
    strengths: "Kreatif, spontan, peka",
    weaknesses: "Kebanyakan ide, mood swing, overthinking",
    bestie: "INFJ, ENTP"
  },
  "ENTP": {
    desc: "Suka adu argumen tapi niatnya fun. Kamu visioner, suka tantangan, dan gampang bosan sama rutinitas.",
    vibes: "🤯💬⚡ “Bikin ribut biar rame”",
    strengths: "Cepat mikir, adaptif, inovatif",
    weaknesses: "Suka PHP, gampang terdistraksi, impulsif",
    bestie: "INFJ, ENFP"
  },
  "ESFP": {
    desc: "Kamu magnet sosial yang bikin orang betah. Hidup kamu itu buat menikmati momen sekarang.",
    vibes: "🪩🍹💃 “FOMO level dewa”",
    strengths: "Ramah, energik, fun",
    weaknesses: "Boros, susah fokus jangka panjang, drama dikit",
    bestie: "ISFJ, ESTP"
  },
  "ESTP": {
    desc: "Anti mager, langsung gerak kalau ada peluang. Hidup penuh tantangan dan aksi seru.",
    vibes: "🏍💥🕶 “Gaspol dulu, mikir belakangan”",
    strengths: "Berani, gesit, problem solver",
    weaknesses: "Nekat, nggak sabaran, bosenan",
    bestie: "ESFP, ISTP"
  },
  "ENFJ": {
    desc: "Kamu inspiratif dan peduli banget sama orang lain. Tipe yang rela bantuin semua orang bahkan kalau lagi capek.",
    vibes: "🌸📢💫 “Bestie semua orang”",
    strengths: "Karismatik, suportif, visioner",
    weaknesses: "Terlalu perfeksionis, sulit bilang ‘nggak’, overcommit",
    bestie: "INFP, ENFP"
  },
  "ENTJ": {
    desc: "Punya visi jelas dan nggak ragu ngejar target. Natural born leader yang tahu cara ngegas tim.",
    vibes: "📊🗡💼 “Boss vibes”",
    strengths: "Strategis, tegas, ambisius",
    weaknesses: "Keras kepala, kurang sabar, workaholic",
    bestie: "INTJ, ENTP"
  },
  "ESFJ": {
    desc: "Kamu tipe yang bikin semua orang nyaman. Perhatian sama detail kecil yang bikin orang merasa dihargai.",
    vibes: "🫂☕🍰 “Mama/papa vibes”",
    strengths: "Sabar, suportif, setia",
    weaknesses: "Susah nolak orang, terlalu mikirin omongan orang, gampang stres",
    bestie: "ISFP, ESTJ"
  },
  "ESTJ": {
    desc: "Kalau mau semua rapi dan jalan sesuai rencana, panggil kamu.",
    vibes: "🗂📌🔨 “No drama, just action”",
    strengths: "Disiplin, efisien, realistis",
    weaknesses: "Kaku, kurang fleksibel, suka ngegas",
    bestie: "ISTJ, ESFJ"
  },
  "INFP": {
    desc: "Kamu idealis yang penuh imajinasi dan empati. Punya dunia sendiri yang kadang susah dijelaskan.",
    vibes: "📖🌸🦋 “Main character energy”",
    strengths: "Kreatif, penyayang, peka",
    weaknesses: "Terlalu sensitif, kadang kurang tegas, gampang kecewa",
    bestie: "ENFJ, ENFP"
  },
  "INFJ": {
    desc: "Kamu deep thinker yang suka merencanakan masa depan. Jarang bicara, tapi sekali ngomong, dalem.",
    vibes: "🌌📜🕊 “Mystery but friendly”",
    strengths: "Insightful, setia, visioner",
    weaknesses: "Perfeksionis, gampang overthinking, butuh waktu recharge lama",
    bestie: "ENFP, ENTP"
  },
  "ISFP": {
    desc: "Kamu estetik, chill, dan peka sama keindahan hidup. Hidup kamu seperti galeri seni.",
    vibes: "📷🌿🕊 “Soft but spicy”",
    strengths: "Kreatif, tenang, empati tinggi",
    weaknesses: "Suka ngilang, mood swing, kadang nggak tegas",
    bestie: "ESFJ, ISTP"
  },
  "ISTP": {
    desc: "Praktis dan logis. Suka nyoba hal baru dan nggak takut eksperimen.",
    vibes: "🔧🏹🕶 “Cool and mysterious”",
    strengths: "Analitis, adaptif, tangguh",
    weaknesses: "Dingin, susah dibaca, gampang bosen",
    bestie: "ESTP, ISFP"
  },
  "INTJ": {
    desc: "Punya rencana A sampai Z, semua udah dipikirin. Jarang ngomong, tapi sekali bergerak langsung tepat sasaran.",
    vibes: "📚🖤♟ “Trust the plan”",
    strengths: "Strategis, fokus, visioner",
    weaknesses: "Kaku, susah terbuka, kurang sabar sama orang lambat",
    bestie: "ENTJ, ENTP"
  },
  "INTP": {
    desc: "Selalu mikirin teori baru dan suka nyari jawaban sendiri. Kadang kelewat tenggelam di pikiran.",
    vibes: "🧩📡☕ “Wait, let me overthink”",
    strengths: "Analitis, kreatif, open-minded",
    weaknesses: "Kurang action, susah fokus ke satu hal, kadang socially awkward",
    bestie: "ENTP, ENFP"
  },
  "ISFJ": {
    desc: "Lembut tapi tangguh. Kamu tipe yang bakal ada buat orang terdekat no matter what.",
    vibes: "🫖🌷📦 “Silent protector”",
    strengths: "Loyal, detail-oriented, sabar",
    weaknesses: "Susah nolak, gampang khawatir, kadang terlalu pasif",
    bestie: "ESFP, ESTJ"
  },
  "ISTJ": {
    desc: "Terstruktur dan bisa diandalkan. Kalau semua orang panik, kamu yang tetep waras.",
    vibes: "📎📦📏 “Rules are my comfort zone”",
    strengths: "Disiplin, konsisten, teliti",
    weaknesses: "Kurang fleksibel, terlalu serius, suka nge-judge diam-diam",
    bestie: "ESTJ, ISFJ"
  }
};

// Variabel state
let currentQuestionIndex = 0;
const answers = {};

// Render semua soal
const quizContainer = document.getElementById("quiz");
questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.className = "question-container" + (index === 0 ? " active" : "");
  div.innerHTML = `
    <div class="question-text">${index + 1}. ${q.text}</div>
    <div class="options">
      <label><input type="radio" name="q${index}" value="a"> ${q.a}</label>
      <label><input type="radio" name="q${index}" value="b"> ${q.b}</label>
    </div>
  `;
  quizContainer.appendChild(div);
});

// Update progress
function updateProgress() {
  const progress = (currentQuestionIndex / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("current").textContent = currentQuestionIndex + 1;
  document.getElementById("total").textContent = questions.length;

  // Tampilkan tombol submit di akhir
  if (currentQuestionIndex === questions.length) {
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("back-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "block";
  } else {
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("back-btn").style.display = "inline-block";
    document.getElementById("submit-btn").style.display = "none";
  }
}

// Pindah ke soal berikutnya
function goNext() {
  const selected = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
  if (!selected) {
    alert("Pilih dulu jawabannya, deh!");
    return;
  }

  answers[currentQuestionIndex] = selected.value;

  currentQuestionIndex++;
  showCurrentQuestion();
  updateProgress();
}

// Kembali ke soal sebelumnya
function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showCurrentQuestion();
    updateProgress();
  }
}

// Tampilkan soal aktif
function showCurrentQuestion() {
  document.querySelectorAll(".question-container").forEach((el, i) => {
    el.classList.toggle("active", i === currentQuestionIndex);
  });
}

// Hitung hasil akhir
function calculateResult() {
  let EI = 0, SN = 0, TF = 0, JP = 0;

  questions.forEach((q, index) => {
    const ans = answers[index];
    if (q.trait === "EI") {
      if (ans === "a") EI++;
      else EI--;
    }
    if (q.trait === "SN") {
      if (ans === "a") SN--;
      else SN++;
    }
    if (q.trait === "TF") {
      if (ans === "a") TF--;
      else TF++;
    }
    if (q.trait === "JP") {
      if (ans === "a") JP++;
      else JP--;
    }
  });

  const type = [
    EI >= 0 ? "E" : "I",
    SN >= 0 ? "N" : "S",
    TF >= 0 ? "F" : "T",
    JP >= 0 ? "J" : "P"
  ].join("");

  const result = mbtiTypes[type];
  document.getElementById("result-type").textContent = `📍 ${type} – ${getFullTypeName(type)}`;
  document.getElementById("result-desc").textContent = result.desc;
  document.getElementById("result-vibes").textContent = result.vibes;
  document.getElementById("result-strengths").textContent = result.strengths;
  document.getElementById("result-weaknesses").textContent = result.weaknesses;
  document.getElementById("result-bestie").textContent = result.bestie;
  document.getElementById("result").style.display = "block";

  // Scroll ke hasil
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
}

// Fungsi nama lengkap tipe
function getFullTypeName(type) {
  const names = {
    "ENFP": "Si Free Spirit 🌈",
    "ENTP": "Si Tukang Debat 🔥",
    "ESFP": "Si Life of The Party 🎉",
    "ESTP": "Si Action Taker 🚀",
    "ENFJ": "Si Motivator 💖",
    "ENTJ": "Si CEO Mode 🏆",
    "ESFJ": "Si Caregiver 🍪",
    "ESTJ": "Si Organizer 📅",
    "INFP": "Si Dreamer 🌙",
    "INFJ": "Si Visionary 🔮",
    "ISFP": "Si Artist 🎨",
    "ISTP": "Si Problem Solver 🛠",
    "INTJ": "Si Mastermind ♟",
    "INTP": "Si Scientist 🧠",
    "ISFJ": "Si Guardian 🛡",
    "ISTJ": "Si Planner 📋"
  };
  return names[type] || type;
}

// Inisialisasi
updateProgress();