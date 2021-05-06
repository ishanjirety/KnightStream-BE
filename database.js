  let playlists={
    count:0,
    playlist:[],
}
  let liked={
    count:0,
    likedvideos:[],
}
  let saved={
    count:0,
    savedvideos:[],
}
let users = {
    count:0,
    user:[
        {
          username:"ishan",
          password:"abc123",
          question:"what is your cat's name",
          answer:"meow"
        },
      ]
}
  let videoList = [
        {
            "id":"MJC4wFdMMyc",
            "title":"Small Opening Mistake | Slav Defence 4...Bf5?! | 5640 players made this mistake!",
            "description":"After learning a lot of Basic Opening Traps, it is now time to take your opening game to the next level with the Small Opening Mistakes series! In the first video IM Sagar Shah shows you an opening error which has been played in over 5640 games! It's a very recurring mistake in the Slav Defence and with this knowledge you would be able to score a lot of easy points in your tournament games!",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/MJC4wFdMMyc",
        },
        {
            "id":"E1b-lOpghgc",
            "title":"Small Chess Opening Mistake | Ruy Lopez Exchange | Don't take that pawn!",
            "description":"It's one of the oldest openings in the world of chess and one that is played most often - Ruy Lopez! Even in such a well-established opening, white can go wrong as early as move 5. IM Sagar Shah tells you about a small opening mistake which can help you for the rest of your chess career!",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/E1b-lOpghgc",

        },
        {
            "id":"UD5m32L08yQ",
            "title":"Small Opening Mistake | Dismantle the Sicilian with a small rook move!",
            "description":"Playing 1.e4 is never easy. Mainly because it involves a lot of theory. In this video IM Sagar Shah shows you a potent weapon against most of the Sicilians. All you do is play the open Sicilian and then go for g3 Bg2 followed by 0-0. But it doesn't end there - Sagar comes up with a deeper idea where a little rook move can lead to major devastation! Enjoy this edition of Small Opening Mistake and make your white repertoire stronger.",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/UD5m32L08yQ",

        },
        {
            "id":"Iz2D-TYpY44",
            "title":"Small Chess Opening Mistake | Ruy Lopez \"My Precious\" Bishop!",
            "description":"For all the Lord of the Rings Fans out there, the ring is very precious to Gollum! In the same vein, the light squared bishop is very precious to every White Ruy Lopez player. How do you take away that precious piece from white? IM Sagar Shah discusses this very important subtlety in this video of the Small Opening Mistake.",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/Iz2D-TYpY44",

        },
        {
            "id":"MCd2vBnUz9s",
            "title":"This will change your understanding of the Grunfeld Defence | Small Opening Mistake",
            "description":"Some knowledge takes years to acquire, but once you have it, you have an edge over all your opponents! Here's a small video by IM Sagar Shah in his Small Chess Opening Mistakes series. He talks about the Grunfeld Defense and a move in the most common opening position which is extremely normal! More than 3780 players have fallen for this small opening mistake! Learn from this example and see your chess understanding climb up anoother rung on the ladder of improvement!",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/MCd2vBnUz9s",

        },
        {
            "id":"BNCe7ZdiWFk",
            "title":"An opening mistake on the 2nd move in the Queen's Gambit | Small Chess Opening Mistake",
            "description":"Opening mistakes are very common in chess, but how many times do you see 15,000+ players making the same opening error? In this 4-minute video IM Sagar Shah explains you the nuances of why d4 d5 c4 Nf6?! is a small opening mistake and how you can avoid it. Also it improves your understanding of different openings like the Grunfeld and the Semi-Tarrasch.",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/BNCe7ZdiWFk",

        },
        {
            "id":"OjZDc6kNZmA",
            "title":"Small Opening Mistake | Early Queen Development - Good or Bad?",
            "description":"When you begin playing chess developing the queen early in the opening is not a good idea. But sometimes it can also be good! The difference is very subtle and it is good to know the difference. IM Sagar Shah explains you this concept in a very succinct manner in this video.",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/OjZDc6kNZmA",

        },
        {
            "id":"ESTsqkhJ6Bw",
            "title":"How to Play Chess in 5 min | Learn Chess Principles for Beginners | EP01 | Amruta Mokal", 
            "description":"So you know the rules of the game. You know how each of the pieces move. Now it's time for you to go to the next level. But you do not know how to do it? No need to worry! Amruta Mokal is here with the 1st part of the Chess Principles for Beginners. She will show you 5 important principles that will help you get to the next level in chess!",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/ESTsqkhJ6Bw",

        },
        {
            "id":"c60eV0BiTTg",
            "title":"Chess Principles for Beginners Episode 02 | ft. Amruta Mokal", 
            "description":"So you know the rules of the game. You know how each of the pieces move. Now it's time for you to go to the next level. But you do not know how to do it? No need to worry! Amruta Mokal is here with the 1st part of the Chess Principles for Beginners. She will show you 5 important principles that will help you get to the next level in chess!",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/c60eV0BiTTg",

        },

        {
            "id":"NJ_kfCCkQGA",
            "title":"Chess Principles for Beginners Episode 03 | ft. Amruta Mokal", 
            "description":"So you know the rules of the game. You know how each of the pieces move. Now it's time for you to go to the next level. But you do not know how to do it? No need to worry! Amruta Mokal is here with the 1st part of the Chess Principles for Beginners. She will show you 5 important principles that will help you get to the next level in chess!",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/NJ_kfCCkQGA",

        },
        {
            "id":"XMhvLb9Rquc",
            "title":"Chess Principles for Beginners Ep 04 | Weaknesses | Vishy Anand vs NN | ft. Amruta Mokal", 
            "description":"So you know the rules of the game. You know how each of the pieces move. Now it's time for you to go to the next level. But you do not know how to do it? No need to worry! Amruta Mokal is here with the 1st part of the Chess Principles for Beginners. She will show you 5 important principles that will help you get to the next level in chess!",
            "channelName":"ChessBase India",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj",
            "genere":"tips & tricks",
            "videoUrl":"https://youtu.be/XMhvLb9Rquc",

        },
        {
            "id":"_r4pZJ21hmk",
            "title":"Fun-Learning Unlearning: Psychology in Chess Part 2 - Rustam vs Megaranto & Harikrishna vs Bacrot", 
            "description":"In this new series of Fun Learning-Unlearning Together, I am going to discuss various games which either I played or watched it live in person and discuss various aspects.",
            "channelName":"Surya Sekhar Ganguly",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwngl3h6TnOmmu0VFPZTq8birZHmup87qZf9vUSg21w=s88-c-k-c0x00ffffff-no-rj",
            "genere":"fun-learn",
            "videoUrl":"https://youtu.be/_r4pZJ21hmk",

        },
        {
            "id":"_BfquTR4raI",
            "title":"Fun-Learning Unlearning: Psychology in Chess Part 3 - Ganguly vs Vallejo Pons", 
            "description":"In this new series of Fun Learning-Unlearning Together, I am going to discuss various games which either I played or watched it live in person and discuss various aspects.",
            "channelName":"Surya Sekhar Ganguly",
            "channelImage":"https://yt3.ggpht.com/ytc/AAUvwngl3h6TnOmmu0VFPZTq8birZHmup87qZf9vUSg21w=s88-c-k-c0x00ffffff-no-rj",
            "genere":"fun-learn",
            "videoUrl":"https://youtu.be/_BfquTR4raI",

        }
]

module.exports = { videoList,playlists,liked,saved,users };