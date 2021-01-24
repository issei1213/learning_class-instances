type AccordionType = {
  hookName: string;
  TagName: string;
};

(() => {
  class Accordion {
    private hookName: string;
    private TagName: string;

    constructor(obj: AccordionType) {
      this.hookName = obj.hookName;
      this.TagName = obj.TagName;

      const elm = <HTMLElement>document.querySelector(obj.hookName);
      const trigger = <HTMLCollection>elm.getElementsByTagName(obj.TagName);

      const triggerLen: number = trigger.length;
      let index = 0;
      while (index < triggerLen) {
        trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    actionUnko() {
      console.log("hookName", this.hookName);
      console.log("TagName", this.TagName);
    }

    // クリックしたら実行される処理
    clickHandler(e: any) {
      e.preventDefault();
      this.actionUnko();
      const target: any = e.currentTarget;
      const content = <HTMLElement>target.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }
  }

  const fuckingAccordion: Accordion = new Accordion({
    hookName: "#js-faq",
    TagName: "p",
  });

  const dummyAccordion: Accordion = new Accordion({
    hookName: "#js-accordion",
    TagName: "a",
  });

  const miniAccordion: Accordion = new Accordion({
    hookName: "#js-accordion-mini",
    TagName: "dt",
  });

  console.log('miniAccordion', miniAccordion)
})();
