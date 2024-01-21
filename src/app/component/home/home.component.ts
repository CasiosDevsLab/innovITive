import { Component } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  headerArticle: Article = {
    title: "Ethical AI innovation",
    description: "Ihre KI-Ethik Beratung mit Expertise. Wir sind Ihr Partner für den ethischen Einsatz von KI.",
    img: "lightbulb_hands.jpg",
    btn: {
      text: "Jetzt anfragen",
      action: () => alert("Button funktioniert")
    }
  }

  unserAngebot: Article[] = [{
    title: "Ethical Moving Forward",
    subtitle: "Unser Angebot",
    description: "innovITive möchte sicherzustellen, dass ihre neuen Technologien, Produkte und Dienstleistungen im Einklang mit moralischen Werten, sozialer Verantwortung und Nachhaltigkeit stehen. Hierfür unterstützen wir sie bei dem Aufbau eines individuellen Rahmenwerks zum Einsatz von KI, da eine langrfristige Ausrichtung der Bemühungen zu KI notwendig sind. Wir lassen den Blick nicht von unseren Teamkameraden und behalten auch das Nachbarboot im Auge. ",
    img: "team.jpg",
    btn: {
      text: "Erfahre mehr",
      action: () => alert("Button funktioniert")
    }
  }]

  consultants: Article[] = [
    {
      subtitle: "Consultant",
      title: "Lennart Behrendt",
      description: "innovITive möchte sicherzustellen, dass ihre neuen Technologien, Produkte und Dienstleistungen im Einklang mit moralischen Werten, sozialer Verantwortung und Nachhaltigkeit stehen. Hierfür unterstützen wir sie bei dem Aufbau eines individuellen Rahmenwerks zum Einsatz von KI, da eine langrfristige Ausrichtung der Bemühungen zu KI notwendig sind. Wir lassen den Blick nicht von unseren Teamkameraden und behalten auch das Nachbarboot im Auge.",
      img: "lennartbehrendt.png",
      btn: {
        text: "Erfahre mehr",
        action: () => alert("Button funktioniert")
      }
    },
    {
      subtitle: "Consultant",
      title: "Enrik Hiller",
      description: "innovITive möchte sicherzustellen, dass ihre neuen Technologien, Produkte und Dienstleistungen im Einklang mit moralischen Werten, sozialer Verantwortung und Nachhaltigkeit stehen. Hierfür unterstützen wir sie bei dem Aufbau eines individuellen Rahmenwerks zum Einsatz von KI, da eine langrfristige Ausrichtung der Bemühungen zu KI notwendig sind. Wir lassen den Blick nicht von unseren Teamkameraden und behalten auch das Nachbarboot im Auge.",
      img: "enrikhiller.png",
      btn: {
        text: "Erfahre mehr",
        action: () => alert("Button funktioniert")
      }
    },
    {
      subtitle: "Consultant",
      title: "Armin Hiller",
      description: "innovITive möchte sicherzustellen, dass ihre neuen Technologien, Produkte und Dienstleistungen im Einklang mit moralischen Werten, sozialer Verantwortung und Nachhaltigkeit stehen. Hierfür unterstützen wir sie bei dem Aufbau eines individuellen Rahmenwerks zum Einsatz von KI, da eine langrfristige Ausrichtung der Bemühungen zu KI notwendig sind. Wir lassen den Blick nicht von unseren Teamkameraden und behalten auch das Nachbarboot im Auge.",
      img: "enrikhiller.png",
      btn: {
        text: "Erfahre mehr",
        action: () => alert("Button funktioniert")
      }
    },
    {
      subtitle: "Consultant",
      title: "Enrik Hiller",
      description: "innovITive möchte sicherzustellen, dass ihre neuen Technologien, Produkte und Dienstleistungen im Einklang mit moralischen Werten, sozialer Verantwortung und Nachhaltigkeit stehen. Hierfür unterstützen wir sie bei dem Aufbau eines individuellen Rahmenwerks zum Einsatz von KI, da eine langrfristige Ausrichtung der Bemühungen zu KI notwendig sind. Wir lassen den Blick nicht von unseren Teamkameraden und behalten auch das Nachbarboot im Auge.",
      img: "enrikhiller.png",
      btn: {
        text: "Erfahre mehr",
        action: () => alert("Button Enrik Hiller funktioniert")
      }
    }
  ]

  contactArticle: Article = {

    title: "Kontakt",
    description: "Bei Fragen zu unserer Dienstleistung, kontaktieren Sie uns jederzeit gerne persönlich. Schreiben Sie uns eine E-Mail oder lassen Sie uns über LinkedIn in Kontakt treten. Wir freuen uns darauf von Ihnen zu hören!",
    img: "contact-home.jpg",
    btn: {
      text: "Nehmen Sie Kontakt auf",
      action: () => alert("Button funktioniert")
    }

  }


}
