import { Injectable } from '@angular/core';
import {VideoLulu} from "../models/video-lulu.model";

@Injectable({
  providedIn: 'root'
})
export class VideoLuluService {
  videoLulus: VideoLulu[] = [
    {
      sender: "Lora",
      description:"Bonne anniv Lulu, j'ai pas d'inspi mais j'taime quand même!",
      videoName:"lora.mp4"
    },
    {
      sender: "Katel",
      description:'Salut Lulu!\n' +
        'Je te souhaite un TRÈS BON ANNIVERSAIRE🥳\n' +
        "J’espère que tu passeras une très bonne journée! \n" +
        "Je te souhaite que du bonheur et de la réussite pour plus tard\n" +
        "Les 18 ans ça se fête! Donc on va les fêtées!j’ai hâte de te revoir\n" +
        "Je te fais des gros bisous! 😘\n" +
        "et encore BON ANNIVERSAIRE!!!🎂🎉",
      videoName:"katel.mp4"
    },
    {
      sender: "Chourouk",
      description:"Alors je te souhaite un joyeux anniversaire, de la part de chouchou!\nPs: marre des basanés",
      videoName:"chourouk.mp4"
    },
    {
      sender: "Azad",
      description:"Joyeux anniversaire lucie plein de bonne chose dans ta vie passe une bonne journée!\n Jte souhaite une longue vie🍾🍾🥳🥳🥳\n",
      videoName:"azad.mp4"
    },
    {
      sender: "Syrine",
      description:"Coucou ma lulu, petite vidéo quand même un peu longue pour te souhaiter un joyeux anniversaire, loin des yeux mais près du cœur ❤",
      videoName:"syrine.mp4"
    },
    {
      sender: "Jade et Ben",
      description:"" +
        "Bonne anniversaire luluuu j'espère que tu va bien profité de cette nouvelle année\n" +
        "et qui plus est la première en tant que majeur MTN tu pourras commander un verre\n" +
        "légalement c incroyable ! Je suis contente que tu sois rentrée ds la vie de mon\n" +
        "autre p'tit Lulu tu le rend heureux ça se voit vous êtes vrmt trop mims et surtout\n" +
        "on s'entend bien tt les deux! J'espère que tu pourras revenir un de ces quatre mais\n" +
        "avec Lucas cette fois comme ça on sfera des ptites sorti tout les quatrebref profite\n" +
        "bien gros bisous et doute plus de toi tes juste magnifique et incroyable ❤",
      videoName:"jadeBen.mp4"
    },
    {
      sender: "Lidwine",
      description:"Joyeux anniversaire pétasse n•2!",
      videoName:"lidwine.mp4"
    },
    {
      sender: "Ugur",
      description:"Chère Lucie,\n" +
        "Septembre 2021, classe de physique chimie, en te voyant mon coeur t'as instantanément\n" +
        "choisi pour que tu sois mon support émotionnel et mental de l'année, mais aussi mon\n" +
        "support visuel pour pouvoir contempler la beauté. De toutes les mauvaises décisions\n" +
        "qu'à pu faire mon coeur celle-ci est de loins la meilleure. Ne parlons pas du chiffre\n" +
        "d'affaire de Colombus et du O'tacos je me sens gros.\n" +
        "Une année pas si compliqué que ça au final, rempli de bons souvenirs et cela parce \n" +
        "que t'étais à mes côtés.\n" +
        "Je ne remercierais jamais assez l'univers de t'avoir mis sur mon chemin l'incarnation\n" +
        "de la splendeur même, Lucie Masson.\n" +
        "\n" +
        "Joyeux anniversaire à la muse des Déesses :)",
      videoName:"ugur.mp4"
    },
    {
      sender: "Sarah, Olivia, Maloé et Lilou",
      description:"Chère Lulu la dinde, \n" +
        "Nous te souhaitons un joyeux anniversaire,\n" +
        "Nous t'aimons fort et te faisons de gros bisous!",
      videoName:"copines.mp4"
    },
    {
      sender: "Tes parents",
      description:"Et voilà dix huit ans, encore 3  fois comme cela et tu seras à la retraite. Bosse bien et bon anniversaire 😂😂😂😂",
      videoName:"parents.mp4"
    },
  ];

  getAllVideoLulus(): VideoLulu[] {
    return this.videoLulus;
  }
}
