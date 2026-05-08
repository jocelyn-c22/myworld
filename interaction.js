const div = document.querySelector(".welcometext");
const text = "welcome to my world!";

function textTypingEffect(element, text, i=0){
  element.textContent += text[i];

  if (i===text.length - 1){
    return;
  }

  setTimeout(() => textTypingEffect(element,text,i+1),  60);

}

textTypingEffect(div,text);



        function setBgGrey() {
            document.body.style.backgroundColor = "#788389";
        }

        function setBgPink() {
            document.body.style.backgroundColor = "#FFE6E8";
        }

        function setBgTeal() {
            document.body.style.backgroundColor = "#8AA29E";
        }

        function setBgBeige() {
            document.body.style.backgroundColor = "#EBD4CB";
        }

        function defaultBgColor() {
            document.body.style.backgroundColor = "#FAFAFA";
        }
