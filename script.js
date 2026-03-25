const content = document.getElementById("content");
const hearts = document.getElementById("hearts");

function clear() {
  hearts.style.display = "none";
  content.innerHTML = "";
}

// =================
// หัวใจ 1
// =================
function clickHeart(num) {
  clear();

  if (num === 1) {
    content.innerHTML = `
      <img src="https://media.discordapp.net/attachments/1015271508173664328/1486295969921241169/30.jpg?ex=69c4fc7d&is=69c3aafd&hm=1591ae1c3e26b2d0981ac88cc338ee708077181e628d782b58553e844d5abcc9&=&format=webp" class="shake">
    `;
  }

  // =================
  // หัวใจ 2
  // =================
  if (num === 2) {
    content.innerHTML = `
      <img src="https://media.discordapp.net/attachments/1015271508173664328/1486295398585729064/you-are-under-cat-arrest.gif?ex=69c4fbf5&is=69c3aa75&hm=a34da2d1d98b88686b2de537231a959a261a4830a576948d82019164ddc4cf96&=">
      <div class="text">รักไหม?</div>
    `;
  }

  // =================
  // หัวใจ 3
  // =================
  if (num === 3) {

    // รูปแรก (สั่น 2 วิ)
    content.innerHTML = `
      <img src="https://media.discordapp.net/attachments/1015271508173664328/1486296603081052260/31.jpg?ex=69c4fd14&is=69c3ab94&hm=2c019848dbace8f87206ec8f4508abd4e7c026796124439641df04b2180cace2&=&format=webp" class="shake">
    `;

    // เปลี่ยนรูป + ข้อความ (3 วิ)
    setTimeout(() => {
      content.innerHTML = `
        <img src="https://media.discordapp.net/attachments/1015271508173664328/1486297461910671501/IMG_8638.jpg?ex=69c4fde0&is=69c3ac60&hm=117bc9b53998827a7ff9cb469f87ca9581289f1a10b382d27a8cb55144c62351&=&format=webp&width=648&height=864">
        <div class="text">ไม่รักหรอ?</div>
      `;
    }, 2000);

    // เปลี่ยนรูปสุดท้าย
    setTimeout(() => {
      content.innerHTML = `
        <img src="https://media.discordapp.net/attachments/1015271508173664328/1486301669267341352/IMG_8639_copy.png?ex=69c501cc&is=69c3b04c&hm=292bbf7c0b2a98dec800e25bd891e6ce326b0a85f2c917549ca74b2f428bf6cf&=&format=webp&quality=lossless&width=648&height=864">
      `;
    }, 5000);
  }

  // =================
  // หัวใจ 4
  // =================
  if (num === 4) {

    // รูป 1 (2 วิ)
    content.innerHTML = `
      <img src="https://media.discordapp.net/attachments/1015271508173664328/1486296603450015814/save__follow__dont_repost_.jpg?ex=69c4fd14&is=69c3ab94&hm=bb1a52e83eef746d014ceb29bc79cfeabf3d34df5d3b6eaa38024dc31a6489b5&=&format=webp">
    `;

    // รูป 2 (3 วิ)
    setTimeout(() => {
      content.innerHTML = `
        <img src="https://media.discordapp.net/attachments/1015271508173664328/1486296603659862089/cute_cat.jpg?ex=69c4fd14&is=69c3ab94&hm=4c2b19a42b8ebd4e974000474655c3ac50978ca3c3c761b6f5771fab7f9cae20&=&format=webp">
      `;
    }, 2000);

    // รูป 3 (สั่นเบา 2 วิ)
    setTimeout(() => {
      content.innerHTML = `
        <img src="https://media.discordapp.net/attachments/1015271508173664328/1486297461411680296/image0.jpg?ex=69c4fde0&is=69c3ac60&hm=a1a4ef6e001485deadfd4738b5b1c0ed3c1f24171169864b0869c6891df3ce9c&=&format=webp&width=648&height=864" class="shake-soft">
      `;
    }, 5000);

    // รูปดอกไม้ + ข้อความ
    setTimeout(() => {
      content.innerHTML = `
        <img id="flower" src="https://media.discordapp.net/attachments/1015271508173664328/1486301669808541767/772a01121a566f0e.png?ex=69c501cc&is=69c3b04c&hm=6a49967ee6a01d03dabeeea06742225f1440f8135151ae20ad0dab0bdeeab4c4&=&format=webp&quality=lossless&width=486&height=864">
        <div class="text">รับดอกไม้สิ</div>
      `;

      document.getElementById("flower").onclick = () => {

        // GIF แมว 3 วิ
        content.innerHTML = `
          <img src="https://media.discordapp.net/attachments/1015271508173664328/1486310230907420773/cat.gif?ex=69c509c5&is=69c3b845&hm=67098295146297738ea6fec3daca8633de928ee2569989c8bf90eb98b2b85d94&=">
        `;

        setTimeout(() => {
          content.innerHTML = `
            <img src="https://media.discordapp.net/attachments/1015271508173664328/1486305341455994920/IMG_7808.jpg?ex=69c50537&is=69c3b3b7&hm=698693fdb67917ce604197ff3af2ecb1c9601a3113af10be88fddfb080a637b9&=&format=webp">
          `;
        }, 2000);
      };

    }, 7000);
  }
}