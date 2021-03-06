class Database {
  constructor(){
    this.quotes = [
      {
        name : "Neji Hyuuga",
        quote : "The difference between stupidity and genius, is that genius has its limits.",
        id : 0
      },
      {
        name : "Gaara",
        quote : "It's not because I'm lazy, it's just because I don't care.",
        id : 1
      },
      {
        name : "Hatake Kakashi",
        quote : "A place where someone still thinks about you is a place you can call home.",
        id : 2
      },
      {
        name : "Orochimaru",
        quote : "Regardless of our limitations, we can always be of some use. Our power may seem insignificant... but it may just prove to be useful in the grand scheme of things. Stay focused. Never avert your eyes, because if an opening arises, even our insignificant power may be enough to determine the fate of the world. Which is why everyone must stay alert and ready to strike at any moment!",
        id : 3
      },
      {
        name : "Shimura Danzo",
        quote : "Emotion leads one to hate... and hate leads one to conflict and war.",
        id : 4
      },
      {
        name : "Itachi Uchiha",
        quote : "Love is the reason why there is pain. When we lose someone precious to us, hate is born. Vengeance is the product of that hate and so death follows. But in death there is only more death. This will give rise to more pains. In this cursed world we live in, it is a cycle of hatred that will not cease. You and I seek the same thing that Jiraiya-sensei wanted. Let me ask you this: How will you confront this hatred in order to create peace?",
        id : 5
      },
      {
        name : "Orochimaru",
        quote : "I could say I'm not sad, but I'd be lying. The problem is the world won't let me stay a kid forever, so I can't lie around crying about it either.",
        id : 6
      },
      {
        name : "Sai",
        quote : "The best way to escape reality without running is smiling even if it is obviously fake.",
        id : 7
      },
      {
        name : "Kimimaro",
        quote : "Lets see, how should I kill you?",
        id : 8
      },
      {
        name : "Hatake Kakashi",
        quote : "I will show you my own move.",
        id : 9
      },
      {
        name : "Haku",
        quote : "I'm sure that the boy I killed, who shared that skill, must also have grown up knowing the pain of which I speak. We are special. We are powerful. And we are feared.",
        id : 10
      },
      {
        name : "Gaara",
        quote : "There are no enemies here because we've all suffered at Akatsuki's hand! So there is no Suna, no Iwa, no Konoha, no Kiri, and no Kumo! There are only \"shinobi\"!",
        id : 11
      },
      {
        name : "Anko Mitarashi",
        quote : "*to Orochimaru* This is no time to reminisce, you're an S-class criminal, top of the most wanted list. You've got to be taken down, and it's only fitting that I'm the one to do it. 'Cause after all, you're the one that taught me everything, right, Sensei?",
        id : 12
      },
      {
        name : "Shino Aburame",
        quote : "This is what a real trump card is.",
        id : 13
      },
      {
        name : "Nara Shikamaru",
        quote : "You would think just this once, when it was life or death, I could pull through.",
        id : 14
      },
      {
        name : "Tenten",
        quote : "I want to be a great and powerful ninja! To walk in the footsteps of the legendary kunoichi, Tsunade!",
        id : 15
      },
      {
        name : "Zabuza Momochi",
        quote : "I can't think of a more fitting destination for a demon ninja, can you?! I'm told there are many demons down there - of all shapes and sizes! Oh yes, I should fit right in! You, on the other hand, Gat??... Well,I fear you're in for a long and very painful eternity!",
        id : 16
      },
      {
        name : "Kankuro",
        quote : "Naruto... please save my little brother.",
        id : 17
      },
      {
        name : "Kabuto Yakushi",
        quote : "*to Naruto* You've just thrown it all away! Dreams don't come true when you're dead!",
        id : 18
      },
      {
        name : "Jiraiya",
        quote : "The true measure of a shinobi is not how he lives, but how he dies.",
        id : 19
      },
      {
        name : "Neji Hyuuga",
        quote : "The curse represents a mark of the bird in a cage... It is... the symbol of being tied down to an inescapable destiny.",
        id : 20
      },
      {
        name : "Hatake Kakashi",
        quote : "*to Pain* The people from this village are different from your average village. Even if it means dying, there's not a single one of us, who would sell out a comrade.",
        id : 21
      },
      {
        name : "Sakura Haruno",
        quote : "*talking to Yamato* Same as always... I can only do the dumbest of things for Naruto...",
        id : 22
      },
      {
        name : "Naruto Uzumaki",
        quote : "Hey, you stupid fox! You're in my body and you owe me rent! So for payment, I'll take your chakra! You got that?!",
        id : 23
      },
      {
        name : "Hatake Kakashi",
        quote : "Because you're the only shinobi in the world who can surpass the Fourth. Thats what I believe.",
        id : 24
      },
      {
        name : "Hatake Kakashi",
        quote : "To know what is right and choose to ignore it is the act of a coward.",
        id : 25
      },
      {
        name : "Shino Aburame",
        quote : "Trying to improve by learning from others that is what calls friendship.",
        id : 26
      },
      {
        name : "Itachi Uchiha",
        quote : "Those who forgive themselves, and are able to accept their true nature... They are the strong ones!",
        id : 27
      },
      {
        name : "Rock Lee",
        quote : "Stop it! How dare you disrespect an opponent that fought you with all he had!?",
        id : 28
      },
      {
        name : "Genma Shiranui",
        quote : "When captured birds grow wiser, they try to open the cage with their beaks. They don't give up, because they want to fly again.",
        id : 29
      },
      {
        name : "Gaara",
        quote : "Just because someone is important to you, it doesn't necessarily mean that, that person is good. Even if you knew that person was evil... People cannot win against their loneliness.",
        id : 30
      },
      {
        name : "Pain",
        quote : "Even the most ignorant, innocent child will eventually grow up as they learn what true pain is. It affects what they say, what they think??? and they become real people.",
        id : 31
      },
      {
        name : "Neji Hyuuga",
        quote : "Fear. That is what we live with. And we live it everyday. Only in death are we free of it.",
        id : 32
      },
      {
        name : "Itachi Uchiha",
        quote : "Even the strongest of opponents always has a weakness.",
        id : 33
      },
      {
        name : "Gaara",
        quote : "We have walked through the darkness of this world, that???s why we are able to see even a sliver of light.",
        id : 34
      },
      {
        name : "Jiraiya",
        quote : "Rejection is a part of any man???s life. If you can???t accept and move past rejection, or at least use it as writing material - you???re not a real man.",
        id : 35
      },
      {
        name : "Nara Shikamaru",
        quote : "It???s because we help out when they???re in trouble that we can count on them to come running when we need it.",
        id : 36
      },
      {
        name : "Nagato",
        quote : "If you don't share someone's pain. You can never understand them.",
        id : 37
      },
      {
        name : "Pain",
        quote : "Love breeds sacrifice... which in turn breeds hatred. Then you can know pain.",
        id : 38
      },
      {
        name : "Sasuke Uchiha",
        quote : "Tears and rain, fall down on my face, my body is unable to stay yet my heart is unwilling to leave.",
        id : 39
      },
      {
        name : "Tobirama Senju",
        quote : "Grown-ups are idiots. If they really want to bring an end to this endless fighting, they need to sit down with one another and reach a truce.",
        id : 40
      },
      {
        name : "Hatake Kakashi",
        quote : "I've been around longer than you have, kid. And I've seen my share of troubles. You're not the only one who knows what it's like to lose somebody. It looks like neither of us has led a charming life, have we? Still, it's not that bad. At least you and I have been lucky enough to find new comrades to help fill the void.",
        id : 41
      },
      {
        name : "Nara Shikamaru",
        quote : "Laziness is the mother of all bad habits. But ultimately she is a mother and we should respect her.",
        id : 42
      },
      {
        name : "Hatake Kakashi",
        quote : "If comrades that you trust gather around you, hope can take physical form and become visible. That`s what I believe...",
        id : 43
      },
      {
        name : "Naruto Uzumaki",
        quote : "Because they saved me from myself, they rescued me from my loneliness. They were the first to accept me for who I am. They're my friends.",
        id : 44
      },
      {
        name : "Itachi Uchiha",
        quote : "Kabuto: Isn't acknowledging what you can't do the same as giving up?",
        id : 45
      },
      {
        name : "Hatake Kakashi",
        quote : "Itachi: No, it means to forgive yourself for what you aren't able to do. Your comrades are there to make up for what you cannot do and to prevent you from ignoring things that you actually might have been able to do.",
        id : 46
      },
      {
        name : "Itachi Uchiha",
        quote : "Once you question your own belief, it's over.",
        id : 47
      },
      {
        name : "Haku",
        quote : "Forget about revenge. The fate of those who seek revenge is grim. It's tragic, You will end up suffering and hurting yourself even more. Even if you do succeed in getting revenge, the only thing that remains is emptiness.",
        id : 48
      },
      {
        name : "Naruto Uzumaki",
        quote : "He who forgives and acknowledges himself... that is what it truly means to be strong!",
        id : 49
      },
      {
        name : "Pain",
        quote : "It is only through the eyes of others that our lives have any meaning.",
        id : 50
      },
      {
        name : "??noki",
        quote : "Don't underestimate me! I don't quit and I don't run! You can act tough all you want! You're not gonna scare me off! No way! I don't care if I DO get stuck as a Genin for the rest of my life! I'll still be Hokage someday!",
        id : 51
      },
      {
        name : "Itachi Uchiha",
        quote : "Just by living, people hurt others without even realizing it. So long as humanity exists, hate will also exist. There is no peace in this cursed world. War is just a crime paid for by the pain of the defeated...",
        id : 52
      },
      {
        name : "Itachi Uchiha",
        quote : "Never give up without even trying. Do what you can, no matter how small the effect it may have!",
        id : 53
      },
      {
        name : "Naruto Uzumaki",
        quote : "I'll admit that you're stronger than before. But because of that, you seem to have lost sight of what's truly important. Now listen carefully. The people of the village, who once abhorred you, have begun to admire you. They think of you as a comrade. It's because you fought hard for their acceptance. You once said it was everyone who cares about you who helped you get where you are now. If you forget others because you have power, and become arrogant and egotistical, you'll eventually become just like Madara. No matter how powerful you become, do not try to shoulder everything alone. Becoming the Hokage doesn't mean people will acknowledge you. But when the people acknowledge you, you can become Hokage. Never forget your friends!",
        id : 54
      },
      {
        name : "Obito Uchiha",
        quote : "The ones who aren't able to acknowledge their own selves are bound to fail.",
        id : 55
      },
      {
        name : "Madara Uchiha",
        quote : "People who continue to put their lives on the line to defend their faith become heroes and continue to exist on in legend.",
        id : 56
      },
      {
        name : "Itachi Uchiha",
        quote : "No one cared who I was until I put on a mask.",
        id : 57
      },
      {
        name : "Choji Akamichi",
        quote : "....Would you consider dying together \"Teamwork\" as well?",
        id : 58
      },
      {
        name : "Gaara",
        quote : "People's lives don't end when they die. It ends when they lose faith.",
        id : 59
      },
      {
        name : "Gaara",
        quote : "You can steal the very last bite of my very best food. You can mock me all you want. But if you insult my best friend, I will obliterate you.",
        id : 60
      },
      {
        name : "Nara Shikamaru",
        quote : "Three times now... We've fought world wars for our own nations, our own villages. We've hurt one another. We've hated one another. That hatred bred a lust for power, and that lust for power created ME. I was a Jinchuuriki, the embodiment of hatred and power. And I hated this world, and all the people in it... I wanted to destroy it with my own hands. The exact same thing Akatsuki is trying to do today. But one man, one ninja from Konoha stopped me. I was his enemy, yet he wept for me! I hurt him, yet he called me his friend! He saved me! My enemy, my fellow Jinchuuriki... He suffered the same pain as me, yet bore no ill will! There are no enemies here because we've all suffered at Akatsuki's hand! SO THERE IS NO SAND, NO STONE, NO LEAF, NO MIST, NO CLOUD! THERE ARE ONLY SHINOBI! And if you still hold a grudge against the Sand, then when this war is over, come and take my head instead! Our enemies are after the friend who saved my life! If they take him, if we hand him over, our world is finished! I want to protect him, and I want to protect our world! But I'm too young to protect it all on my own! All of you lend me your aid!",
        id : 61
      },
      {
        name : "Might Guy",
        quote : "Now there's something I understand a little better. Hate, sadness, even joy. To be able to share it with another person... Naruto Uzumaki. From fighting him I learned that. He knew pain like I did and then he taught me that you can change your path. I wish that one day I can be needed by someone. Not as a frightening weapon... But as the sand's Kazekage.",
        id : 62
      },
      {
        name : "Gaara",
        quote : "Family? Let me tell you what kind of link I have with them. They are just lumps of meat linked by hatred and murderous intent!",
        id : 63
      },
      {
        name : "Sasuke Uchiha",
        quote : "I understand now. Even if I must take the devil's fruit, I must gain power. I am an avenger.",
        id : 64
      },
      {
        name : "Obito Uchiha",
        quote : "I'm no one. I don't want to be anyone. All I care about is completing the moon's eye plan. This world is completely worthless. There is nothing left in it but misery.",
        id : 65
      },
      {
        name : "Orochimaru",
        quote : "Either people change or they die before they do. It's one or the other.",
        id : 66
      },
      {
        name : "Kimimaro",
        quote : "Humans... Do humans have a purpose when they are born? I have been wondering recently. Because they are born, do they have an important duty? The meaning of being born... For humans to find that answer... It is the one freedom God gave them.",
        id : 67
      },
      {
        name : "Sasuke Uchiha",
        quote : "I have told you before, I'm an avenger. I don't care about this test, Chunin or whatever. 'Am I strong?' that's the answer I want.",
        id : 68
      },
      {
        name : "Itachi Uchiha",
        quote : "The village does have its dark side and its inconsistencies, but I'm still Konoha's Itachi Uchiha.",
        id : 69
      },
      {
        name : "Madara Uchiha",
        quote : "Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.",
        id : 70
      },
      {
        name : "Tobi",
        quote : "It's too late to regret. Reality is just cruelly moving forward.",
        id : 71
      },
      {
        name : "Madara Uchiha",
        quote : "Man seeks peace, yet at the same time yearning for war... Those are the two realms belonging solely to man. Thinking of peace whilst spilling blood is something that only humans could do. They're two sides of the same coin... to protect something... another must be sacrificed.",
        id : 72
      },
      {
        name : "Pain",
        quote : "People are stupid. If I don't do this, there will be no peace. Eventually, time will pass and the pain will heal. Eventually, checkmate's power will weaken and people will begin fighting again. This time, they will use the weapon themselves and once more know true pain. And for the short time, peace will come again. It will give birth to short period of peace within this endless chain of hatred. That's my wish.",
        id : 73
      },
      {
        name : "Pain",
        quote : "When you give up, your dreams and everything else, they're gone.",
        id : 74
      },
      {
        name : "Madara Uchiha",
        quote : "Pain is the way to bring peace.",
        id : 75
      },
      {
        name : "Jiraiya",
        quote : "Power is not will, it is the phenomenon of physically making things happen.",
        id : 76
      },
      {
        name : "Naruto Uzumaki",
        quote : "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain because life's greatest lessons are learned through pain.",
        id : 77
      },
      {
        name : "Hatake Kakashi",
        quote : "Don't improvise what you cannot handle.",
        id : 78
      },
      {
        name : "Itachi Uchiha",
        quote : "Those who cannot acknowledge themselves, will eventually fail.",
        id : 79
      },
      {
        name : "Orochimaru",
        quote : "Even children are forced to grow up in the face of pain.",
        id : 80
      },
      {
        name : "Hatake Kakashi",
        quote : "It's human nature not to realize the true value of something, unless they lose it.",
        id : 81
      },
      {
        name : "Madara Uchiha",
        quote : "In society, those who don't have many abilities, tend to complain more.",
        id : 82
      },
      {
        name : "Naruto Uzumaki",
        quote : "Talking about peace whilst spilling blood, it's something that only humans can do.",
        id : 83
      },
      {
        name : "Naruto Uzumaki",
        quote : "If you don't like the hand that fate's dealt you with, fight for a new one!",
        id : 84
      },
      {
        name : "Jiraiya",
        quote : "The pain of being alone is completely out of this world, isn't it? I don't know why, but I understand your feelings so much, it actually hurts.",
        id : 85
      },
      {
        name : "Hatake Kakashi",
        quote : "Getting dumped always makes a man stronger. But then again, men aren't meant to pursue happiness.",
        id : 86
      },
      {
        name : "Rock Lee",
        quote : "The hole in one's heart gets filled by others around you. Friends won't flock to someone who abandons the memory of his friends and gives up on the world just because things don't go the way he wants them to. That won't help fill the hole in your heart. And people won't help those who run away and do nothing. As long as you don't give up, there will always be salvation.",
        id : 87
      },
      {
        name : "Tobi",
        quote : "If you believe in your dreams, I will prove to you, that you can achieve your dreams just by working hard.",
        id : 88
      },
      {
        name : "Naruto Uzumaki",
        quote : "Not one wish ever gets granted in this world.",
        id : 89
      },
      {
        name : "Naruto Uzumaki",
        quote : "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be!",
        id : 90
      },
      {
        name : "Nara Shikamaru",
        quote : "When people are protecting something truly special to them, they truly can become... as strong as they can be.",
        id : 91
      },
      {
        name : "Itachi Uchiha",
        quote : "There's no advantage to hurrying through life.",
        id : 92
      },
      {
        name : "Jiraiya",
        quote : "No single thing is perfect by itself. That's why we're born to attract other things to make up for what we lack. I think we start walking in the right direction only after we start getting our counterparts beside us.",
        id : 93
      },
      {
        name : "Nara Shikamaru",
        quote : "Knowing what it feels to be in pain, is exactly why we try to be kind to others.",
        id : 94
      },
      {
        name : "Ohnoki",
        quote : "It's stupid to talk about things you're not. Be yourself and you'll be fine.",
        id : 95
      },
      {
        name : "Nara Shikamaru",
        quote : "It's because I've experienced pain in the past, that I can even consider what would be best for the future!",
        id : 96
      },
      {
        name : "Sakura Haruno",
        quote : "Every one of us must do what's in their power! If we're going to die anyway, then it's better to die fighting than to do nothing!",
        id : 97
      },
      {
        name : "Itachi Uchiha",
        quote : "Now I feel that maybe knowing who I actually am is the key to reach perfection. Because that means knowing what I can and cannot do.",
        id : 98
      },
      {
        name : "Naruto Uzumaki",
        quote : "When people have different opinions, you should apply the majority vote.",
        id : 99
      },
      {
        name : "Naruto Uzumaki",
        quote : "Failing doesn't give you a reason to give up as long as you believe.",
        id : 100
      },
      {
        name : "Naruto Uzumaki",
        quote : "If the father's responsibility is to protect the child... then my responsibility is to exceed the father.",
        id : 101
      },
      {
        name : "Sai",
        quote : "It's because Sakura loves Sasuke that she doesn't want him to sink any lower. It's because she loves him that she wants to rescue him from the evil path he currently walks. Even if the only way to do it is to kill him with her own two hands, I believe, she's prepared to do it because she loves him.",
        id : 102
      },
      {
        name : "Neji Hyuuga",
        quote : "People share only one common fate... death.",
        id : 103
      },
      {
        name : "Shikaku Nara",
        quote : "Legends from the distant past are always exaggerated, but eventually, someone outdoes them... that's when new legends are born!",
        id : 104
      },
      {
        name : "Gamabunta",
        quote : "What's your wish? Peace? Money? Or the world? Whatever you wish for, it's something you have to get with your own strength!",
        id : 105
      },
      {
        name : "Sakura Haruno",
        quote : "The things that are most important aren't written in books. You have to learn them by experiencing them yourself.",
        id : 106
      },
      {
        name : "Nara Shikamaru",
        quote : "Someday, I just want to marry a regular girl who isn't too ugly and not too pretty. Have two children, first a girl, then a boy. Retire after my daughter is married and my son becomes a successful ninja, and spend the rest of my life playing sh??gi or Go. Then die of old age before my wife.",
        id : 107
      },
      {
        name : "Itachi Uchiha",
        quote : "Self-sacrifice... A nameless shinobi who protects peace within its shadow. That is a true shinobi.",
        id : 108
      },
      {
        name : "Yashamaru",
        quote : "Love is... care and devotion you feel for the precious ones around you.",
        id : 109
      },
      {
        name : "Hiruzen Sarutobi",
        quote : "It doesn't matter what you do, if you live and die as you like. However, no matter what road you end up taking, remember to protect the people that are precious to you.",
        id : 110
      },
      {
        name : "Nara Shikamaru",
        quote : "In life, nothing good comes out of hurrying.",
        id : 111
      },
      {
        name : "Jirobou",
        quote : "I don't know which is more pathetic; the fool, or those who follow him.",
        id : 112
      },
      {
        name : "Sasori",
        quote : "What's the point of something that disappears as soon as it's born?",
        id : 113
      },
      {
        name : "Sai",
        quote : "A smile is the best way to get oneself out of a tight spot, even if it is a fake one. Surprisingly enough, everyone takes it at face value.",
        id : 114
      },
      {
        name : "Nagato",
        quote : "War brings death. And wounds and pain to both sides. There's nothing harder to accept, than the deaths of those you love. So you believe they could never die. Especially those who haven't known war.",
        id : 115
      },
      {
        name : "Jiraiya",
        quote : "A person grows up when he's able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.",
        id : 116
      },
      {
        name : "Chouji Akimichi",
        quote : "True beauty lies in things that last forever, never rotting or fading.",
        id : 117
      },
      {
        name : "Itachi Uchiha",
        quote : "People become stronger because they have things they cannot forget. That's what you call growth.",
        id : 118
      },
      {
        name : "Hatake Kakashi",
        quote : "[talking about food] The last bite. It is the final one, and the most suitable one to enjoy the most. No matter what it costs, I will not give it up.",
        id : 119
      },
      {
        name : "Might Guy",
        quote : "Peace under an illusion is not true peace. It's only meaningful if the real world manages to accomplish it.",
        id : 120
      },
      {
        name : "Hatake Kakashi",
        quote : "My power isn't the Rasengan or Sage Jutsu or the Nine Tails chakra. My power is right here. [points to the center of his chest]",
        id : 121
      },
      {
        name : "Gaara",
        quote : "It's never been \"The one who becomes Hokage will be acknowledge by everyone\", it's \"The one who is acknowledge by everyone, becomes the Hokage\".",
        id : 122
      },
      {
        name : "Obito Uchiha",
        quote : "In the shinobi world, those that break the written and unwritten rules are deemed trash... but be that as it may... Those that would desregard their comrades so easily are even worse than trash. And those who don't have the decency to respect the memories of their comrades are the worst.",
        id : 123
      },
      {
        name : "Jiraiya",
        quote : "If you want to be free from your suffering, make up your mind. If you give up on your dream, you will suffer more.",
        id : 124
      },
      {
        name : "Itachi Uchiha",
        quote : "I really am... shinobi trash. But the one thing I still learned is this. That void is something that everyone helps you fill. Just because you face adversity and hardships, is no reason to give up on this world. A person willing to throw away all those memories... of their friends and comrades, will never find peace of mind. Resorting to something like that isn't going to bury that hole. If you persevere and endure, someone will be there to support you!",
        id : 125
      },
      {
        name : "Madara Uchiha",
        quote : "In order to escape a road of solitude, one has to work hard, and forge a new path with their own power.",
        id : 126
      },
      {
        name : "Pain",
        quote : "Somewhere inside of me?! Take a good look, there's nothing inside of me anymore!!! I don't feel pain, I don't feel anything! You need to let that guilt go Kakashi. This wind hole wasn't your doing... It was made by this evil, cruel world.",
        id : 127
      },
      {
        name : "Gaara",
        quote : "Rejection makes a man stronger.",
        id : 128
      },
      {
        name : "Zabuza Momochi",
        quote : "Teachings that do not speak of pain have no meaning, for humankind cannot gain anything in return.",
        id : 129
      },
      {
        name : "Sakura Haruno",
        quote : "Nine-Tails, you are merely a momentary life, a temporary existence of coalesced energy... energy that once was a single, ultimate form! An unstable force, lacking in intelligence or sapience, you require a guide to show you purpose. That guide is the Uchiha! The tailed beasts are but slaves to those with blessed eyes. Obey!",
        id : 130
      },
      {
        name : "Madara Uchiha",
        quote : "In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love.",
        id : 131
      },
      {
        name : "Orochimaru",
        quote : "Maybe, just maybe, there is no purpose in life... but if you linger a while longer in this world, you might discover something of value in it.",
        id : 132
      },
      {
        name : "Orochimaru",
        quote : "True power is forged from the desire smoldering in the heart, it fans into a flame and begins to burn with an intensity one scarcely imagines to be possible...",
        id : 133
      },
      {
        name : "Pain",
        quote : "We are but men, drawn to act in the name of revenge that we deem to be justice. But... if there is justice in revenge then that same justice will breed only more revenge... and trigger a cycle of hatred.",
        id : 134
      },
      {
        name : "Hatake Kakashi",
        quote : "How can you say that you will never change? That you will not change, no matter how great the pain you face? Can you continue believing in yourself forever? Can you guarantee it? Can you have such faith in yourself?!",
        id : 135
      },
      {
        name : "Naruto Uzumaki",
        quote : "Behind this mask is...Another mask! Pretty cool, huh?",
        id : 136
      },
      {
        name : "Gaara",
        quote : "Listen to yourself whining and complaining like some sorry little victim! You can whimper all day for all I care, you're nothing but a coward!",
        id : 137
      },
      {
        name : "Rock Lee",
        quote : "One day I'd like to become something precious to others.",
        id : 138
      },
      {
        name : "Naruto Uzumaki",
        quote : "My motto is to be stronger than yesterday, if I have to I'll be stronger than half a day ago, even a minute ago!",
        id : 139
      },
      {
        name : "Itachi Uchiha",
        quote : "While you're alive, you need a reason for your existence. Being unable to find one is the same as being dead.",
        id : 140
      },
      {
        name : "Naruto Uzumaki",
        quote : "It is not wise to judge others based on your own preconceptions and by their appearances.",
        id : 141
      },
      {
        name : "Pain",
        quote : "It's not the face that makes someone a monster, it's the choices they make with their lives.",
        id : 142
      },
      {
        name : "Pain",
        quote : "You think you're the only ones who matter. You think you can put off death. But that peace made you foolish and thoughtless. If you kill someone, someone else will kill you... this hatred binds us together.",
        id : 143
      },
      {
        name : "Nara Shikamaru",
        quote : "Do you understand pain a little now? If you don't share someone's pain, you can never understand them. But just because you understand them doesn't mean you can come to an agreement. That's the truth",
        id : 144
      },
      {
        name : "Nara Shikamaru",
        quote : "*To Tayuya* How many times do I have to tell you? The first move is always a feint. It's the most basic thing, to land a hit with the second move.",
        id : 145
      },
      {
        name : "Nara Shikamaru",
        quote : "*To Temari* It really doesn't matter to me if I ever become a ch??nin or not, but I guess I shouldn't let myself be beaten by a female, so let's do it.",
        id : 146
      },
      {
        name : "Naruto Uzumaki",
        quote : "*To himself, while fighting Temari* Oh man... those clouds are so lucky. so free. More to the point, I didn't feel like doing this in the first place. And I only became a ninja because I thought life would've been more interesting as one... I suppose things aren't gonna be that simple.",
        id : 147
      },
      {
        name : "Nara Shikamaru",
        quote : "I'm the only one who can bear the full brunt of your hate! It's my job, no one else's! I'll bear the burden of your hatred... and we'll die together!",
        id : 148
      },
      {
        name : "Neji Hyuuga",
        quote : "Hinata... this is the unalterable difference in strength... the distinction that separates the elite from the failure. This is the unchangeable reality. From the moment you said you wouldn't run, your defeat was inevitable. The only possible outcome was your present despair... Withdraw!",
        id : 149
      },
      {
        name : "Orochimaru",
        quote : "[To Sarutobi] What nonsense! In the grand scheme of time, you're nothing more than a trivial footnote in the brief history of a cluster of huts called the \"Leaf Village\"! In time, the Hokage Stone Faces will crumble and be worn down to nothing...",
        id : 150
      },
      {
        name : "Neji Hyuuga",
        quote : "[To Hinata At Chuunin Exams] So you're not going to withdraw? Then don't blame me for what happens to you.",
        id : 151
      },
      {
        name : "Haku",
        quote : "{TO NARUTO} Oh, by the way... I'm a boy",
        id : 152
      },
      {
        name : "Haku",
        quote : "Often people have it wrong, mistakenly believing... that showing mercy to an enemy is kindness. They spare the foe whose life is in their hands. But don't you see? It's an empty existence, to go on living... alone and unloved... when defeat's already cost you your dream!",
        id : 153
      },
      {
        name : "Gaara",
        quote : "Bitter crimson tears flow from lifeless eyes, and mingle with the endless sands... Bestowing ever greater power upon the demon god.",
        id : 154
      },
      {
        name : "Orochimaru",
        quote : "Darkness. When everything that you know and love is taken away from you so harshly. All you can think about is anger, hatred and even revenge. And no one can save you.",
        id : 155
      },
      {
        name : "Nara Shikamaru",
        quote : "He turned a room full of strangers into a room full of enemies with just one sentence.",
        id : 156
      },
      {
        name : "Itachi Uchiha",
        quote : "True Change cannot be made if it is bound by laws and limitations, predictions and imagination.",
        id : 157
      },
      {
        name : "Naruto Uzumaki",
        quote : "If we fight again... We're both gonna die.",
        id : 158
      },
      {
        name : "Tenten",
        quote : "The weaker you are the louder you bark.",
        id : 159
      },
      {
        name : "Pain",
        quote : "Religion, ideology, resources, land, spite, love or just because. No matter how pathetic the reason, it's enough to start a war.",
        id : 160
      },
      {
        name : "Pain",
        quote : "Human nature pursues strife.",
        id : 161
      },
      {
        name : "Jiraiya",
        quote : "All the girls in Konoha are so hot these days.",
        id : 162
      },
      {
        name : "Yashamaru",
        quote : "A wound of a heart is different from a flesh wound. Unlike a flesh wound, there are no ointments to heal it, and there are times when they never heal.",
        id : 163
      },
      {
        name : "Pain",
        quote : "Justice comes from vengeance, but that justice only breeds more vengeance.",
        id : 164
      },
      {
        name : "Itachi Uchiha",
        quote : "Any technique is worthless before my eyes.",
        id : 165
      },
      {
        name : "Naruto Uzumaki",
        quote : "I will become a bigger badass than my father. And a stronger shinobi than my mother!",
        id : 166
      },
      {
        name : "Naruto Uzumaki",
        quote : "To become Hokage is my dream!",
        id : 167
      },
      {
        name : "Naruto Uzumaki",
        quote : "So shut up about \"destiny\" and...how people can't change! 'Cause... unlike me... you're not a \"failure\".",
        id : 168
      },
      {
        name : "Naruto Uzumaki",
        quote : "Sasuke! Sasuke! Sasuke! What does he have that I don't have?!",
        id : 169
      },
      {
        name : "Naruto Uzumaki",
        quote : "Sasuke, I always knew you were alone. In the beginning I was glad because I thought you were like me - I wanted to talk to you! But you... didn't speak. You always had everyone watching you. You could do everything and we were too different. So I decided that you would become my rival. I didn't want to lose because I was called a loser all the time. Even when we became Team 7, I still thought this way. I always tried to lie but... but the truth is... I always wanted to be like you. I aspired to be like you. Because of that... I was glad that you wanted to fight me.",
        id : 170
      },
      {
        name : "Naruto Uzumaki",
        quote : "When I'm with Iruka-sensei, I think if that's what having a father is like... *to Sasuke* When I'm with you, I think if that's what having a brother is like.",
        id : 171
      },
      {
        name : "Naruto Uzumaki",
        quote : "Sakura-chan, you sure do love Sasuke, don't you?",
        id : 172
      },
      {
        name : "Might Guy",
        quote : "DYNAMIC ENTRY!",
        id : 173
      },
      {
        name : "Kisame Hoshigaki",
        quote : "[after learning Guy Sensei's name. Might Guy] Yeah, mighty stupid looking guy!",
        id : 174
      },
      {
        name : "Kisame Hoshigaki",
        quote : "Hmhmhmhm, I think I will play with you a bit before killing you!",
        id : 175
      },
      {
        name : "Kisame Hoshigaki",
        quote : "Hmm... Itachi... it would be annoying if he moved around a lot. Perhaps we should cut off a leg or two?",
        id : 176
      },
      {
        name : "Kisame Hoshigaki",
        quote : "I'll enjoy shaving you to death.",
        id : 177
      },
      {
        name : "Kisame Hoshigaki",
        quote : "Konoha's Uchiha clan and the Mist's Seven Shinobi-gatana seem petty before his name.",
        id : 178
      },
      {
        name : "Kimimaro",
        quote : "Against the power of will I posses... The capability of my body is nothing.",
        id : 179
      },
      {
        name : "Kimimaro",
        quote : "[after Naruto does his Shadow Clone Jutsu] Oh, there sure is a lot of garbage scattered around here. But, trash is just trash after all. It simply needs to be cleaned up.",
        id : 180
      },
      {
        name : "Kimimaro",
        quote : "I don't hate the darkness. It was IN the darkness that I was raised.",
        id : 181
      },
      {
        name : "Kimimaro",
        quote : "I've been wondering... There must be a purpose for people being born into this world. Why are we here? What does it mean? I've been thinking about it a lot lately. I realized that finding our purpose IS the meaning. That's why we're here. And the ones who find it... They're the only ones who are truly free.",
        id : 182
      },
      {
        name : "Kimimaro",
        quote : "*referring to Orochimaru* I am not his pawn..! He is the one, the only one who ever gave my life meaning!! But how could the likes of you EVER UNDERSTAND THAT?!?",
        id : 183
      },
      {
        name : "Kimimaro",
        quote : "I will see the truth of this world... LORD OROCHIMARU WILL SHOW ME!!!",
        id : 184
      },
      {
        name : "Kimimaro",
        quote : "I see...since I am no longer going to be Lord Orochimaru's vessel, my duty is to protect the vessel.",
        id : 185
      },
      {
        name : "Kimimaro",
        quote : "You've only seen one of my dances.",
        id : 186
      },
      {
        name : "Kimimaro",
        quote : "[to the Sound Ninja Four] Which do you prefer? To die, or to obey?",
        id : 187
      },
      {
        name : "Kimimaro",
        quote : "Is there really a god? If there is one, why does he keep me confined in here?",
        id : 188
      },
      {
        name : "Kimimaro",
        quote : "If Tayuya comes back, I'll kill her.",
        id : 189
      },
      {
        name : "Kiba Inuzuka",
        quote : "Akamaru, what's wrong boy? Have you forgotten my scent? We've always been together haven't we? We grew up together. Akamaru please, somewhere in there, there has to be a part of you that remembers. Show me that you remember. AKAMARU! Forgive me. Can you? I know that I've brought you nothing but pain and suffering. I broke my word. I swore I'd always protect you. Akamaru I'm sorry. Sorry I wasn't a better master. I'm here. Here for you. Forever.",
        id : 190
      },
      {
        name : "Kiba Inuzuka",
        quote : "I called you an idiot, idiot!",
        id : 191
      },
      {
        name : "Kiba Inuzuka",
        quote : "It's not bad enough they buried us alive in the oversized dung heap, but now they're stealing our chakra. You gotta give these guys credit for thoroughness!",
        id : 192
      },
      {
        name : "Kiba Inuzuka",
        quote : "A wall's a wall and there's no wall I can't punch a hole through!",
        id : 193
      },
      {
        name : "Kiba Inuzuka",
        quote : "Hinata, untie the ropes before you faint.",
        id : 194
      },
      {
        name : "Kiba Inuzuka",
        quote : "I must be a pretty pathetic owner for you to have bitten me, Akamaru....",
        id : 195
      },
      {
        name : "Kankuro",
        quote : "A fair warning... we ninja of the Sand aren't as easygoing as those of the Leaf. But getting close to Kuroari so carelessly...isn't good!",
        id : 196
      },
      {
        name : "Kankuro",
        quote : "[Thinking] What a sucker. He doesn't know I can re-establish control over my puppet within a blink of an eye. It's what makes me an expert puppet master. And so what if Crow's body is out of commission? I don't need his body. Every part of him is a lethal weapon. [To Shino] Looks like you underestimated me, bug boy. For the last time! There's enough poison on that to drop an elephant, so you're dead.",
        id : 197
      },
      {
        name : "Kankuro",
        quote : "You tick me off. I hate short people anyway. And you're so impertinent for someone younger than me. It makes me want to break you.",
        id : 198
      },
      {
        name : "Kankuro",
        quote : "But I want to play around before some noisy people come!",
        id : 199
      },
      {
        name : "Hatake Kakashi",
        quote : "Gai...what I said earlier...I was out of line. I was being a self-righteous fool. I realize now that if I'd been in your shoes, I probably couldn't have stopped him, either.",
        id : 200
      },
      {
        name : "Hatake Kakashi",
        quote : "I don't know what this boy means to you, Gai, but I shouldn't have to tell you that we never bring our personal feelings into play. I didn't think you were capable of it.",
        id : 201
      },
      {
        name : "Hatake Kakashi",
        quote : "I've lived longer than you. And times have been bad. I know the pain of loss. You and I haven't really been fortunate. It's true. But it could be worse. For me, and for you, too... We've found good friends, haven't we? Because of your losses, you should understand.",
        id : 202
      },
      {
        name : "Hatake Kakashi",
        quote : "Sorry I'm late. You wouldn't believe the traffic.",
        id : 203
      },
      {
        name : "Hatake Kakashi",
        quote : "Sorry I'm late guys, a black cat crossed my path so I had to go the long way.",
        id : 204
      },
      {
        name : "Hatake Kakashi",
        quote : "[thinking] If I'm still sane by the time I finish their training it'll be a miracle!",
        id : 205
      },
      {
        name : "Hatake Kakashi",
        quote : "A ninja must see underneath the underneath.",
        id : 206
      },
      {
        name : "Hatake Kakashi",
        quote : "Leaf Village Secret-Finger Justu...1,000 Years of Death!!! *sticks his fingers up Naruto's ass*",
        id : 207
      },
      {
        name : "Hatake Kakashi",
        quote : "Hmmm...how do I put this? My first impression of this group...you're a bunch of idiots!",
        id : 208
      },
      {
        name : "Kabuto Yakushi",
        quote : "[about the inefficacy of his attack against Tsunade] Did it not penetrate deep enough because of her fat breasts?",
        id : 209
      },
      {
        name : "Kabuto Yakushi",
        quote : "The more you want something, the harder it is to wait for it.",
        id : 210
      },
      {
        name : "Kabuto Yakushi",
        quote : "Mm, she's strong and scary. I bet she's single.",
        id : 211
      },
      {
        name : "Iruka Umino",
        quote : "[About Naruto] Well that's typical. Not happy unless he's giving people a heart attack.",
        id : 212
      },
      {
        name : "Iruka Umino",
        quote : "[when Naruto transforms into a woman in front of the whole class] CUT THE STUPID TRICKS! THIS IS YOUR LAST WARNING!!",
        id : 213
      },
      {
        name : "Iruka Umino",
        quote : "[as a child] Why should I be sad?! My parents died protecting the village from the monster fox. They're heroes, and I'm the son of those heroes! If I cry, it's because I'm happy! I'm not even sad that they went and left me all alone...",
        id : 214
      },
      {
        name : "Iruka Umino",
        quote : "I hate the fox, but the boy - I don't hate the boy.",
        id : 215
      },
      {
        name : "Iruka Umino",
        quote : "It seems like the small leaves in the Village of Konoha have inherited that \"will of fire\" you spoke of, Third. The fire on the leaves will eventually burn greater and stronger... It will flash its light and protect this village.",
        id : 216
      },
      {
        name : "Iruka Umino",
        quote : "When a person dies, he disappears, along with his past, current lifestyle, and his future. Many people die in missions and wars. They die easily and in surprisingly simple ways. Hayate was one of them. Those who die have goals and dreams. But everyone has something as important as those. Parents, siblings, friends, lovers... people who are important to you. They trust and help each other. The bond between the people important to you ever since birth and the string that binds them becomes thicker and stronger as time goes by... It's beyond reason. Those bound to you by that string will do that because it is important.",
        id : 217
      },
      {
        name : "Ino Yamanaka",
        quote : "Billboard brow!!!",
        id : 218
      },
      {
        name : "Ino Yamanaka",
        quote : "Oh, I'm sorry. Her head's so empty, so I mistook her for a vase and put flowers in her. You might want to spit that out quick, though. Those can be quite poisonous.",
        id : 219
      },
      {
        name : "Ino Yamanaka",
        quote : "I believe you have the potential to bloom into something even more beautiful than the cosmos.",
        id : 220
      },
      {
        name : "Haku",
        quote : "I am of no more use as his tool. Please, kill me.",
        id : 221
      },
      {
        name : "Haku",
        quote : "Often people have it wrong, mistakenly believing...that showing mercy to an enemy is kindness. They spare the foe whose life is in their hands... But don't you see? It's an empty existence... to go on living... alone and unloved... when defeat's already cost you your dream!",
        id : 222
      },
      {
        name : "Haku",
        quote : "Can you understand? Not having a dream... not being needed by anyone... The pain of merely being alive.",
        id : 223
      },
      {
        name : "Haku",
        quote : "That is when I realized that in all of the world no one needed me. I was alone.",
        id : 224
      },
      {
        name : "Haku",
        quote : "I want to make his dreams come true...",
        id : 225
      },
      {
        name : "Haku",
        quote : "Is there... somebody precious to you?",
        id : 226
      },
      {
        name : "Gaara",
        quote : "I took the life of the woman I was supposed to call mother in the process of being born... in order to become the world's strongest shinobi... I became the incarnation of sand...",
        id : 227
      },
      {
        name : "Gaara",
        quote : "It's too bad I don't think of you as anything. If you get in my way... I'll kill you.",
        id : 228
      },
      {
        name : "Gaara",
        quote : "BLOOOOOOOOOOOOOOOD!!! MY BLOOOOOOOOOOOOOD!!!",
        id : 229
      },
      {
        name : "Gaara",
        quote : "You can make a rain of 1,000 needles. I will make it rain blood.",
        id : 230
      },
      {
        name : "Gaara",
        quote : "People cannot win against their loneliness.",
        id : 231
      },
      {
        name : "Chouji Akimichi",
        quote : "[When Ino visits him in the hospital] Hehe. I'm also the type that gets girls to visit him. Take that, Shikamaru!",
        id : 232
      },
      {
        name : "Chouji Akimichi",
        quote : "I'm not fat, I'm pleasingly plump!",
        id : 233
      },
      {
        name : "Chouji Akimichi",
        quote : "This punch is heavier than life itself!",
        id : 234
      },
      {
        name : "Chouji Akimichi",
        quote : "Chubbies rule!",
        id : 235
      },
      {
        name : "Anko Mitarashi",
        quote : "Time's a-wastin' people, let's go!",
        id : 236
      },
      {
        name : "Itachi Uchiha",
        quote : "You're such a child. You talk of nothing but pipe dreams... there are times when people must make painful choices.",
        id : 237
      },
      {
        name : "Temari",
        quote : "*about Shikamaru* Amazing. This slacker-clown outsmarted me!",
        id : 238
      },
      {
        name : "Temari",
        quote : "Sharpen your kama at sunset.",
        id : 239
      },
      {
        name : "Temari",
        quote : "*to Lee* Get yourself and that loser out of my way.",
        id : 240
      },
      {
        name : "Temari",
        quote : "*to Shikamaru* You are awfully fragile. What kind of man are you?",
        id : 241
      },
      {
        name : "Temari",
        quote : "Wasn't much of a match...kinda boring.",
        id : 242
      },
      {
        name : "Gaara",
        quote : "He was the one who taught me to deepen my bond with my people. Thanks to him, I was able to regain my true self. That village has him, the one who cherishes a friend's bond more than anyone I know. Naruto Uzumaki... Knowing him and the friends he holds so dear, they will overcome this disaster and grow even stronger from it.",
        id : 243
      },
      {
        name : "Gaara",
        quote : "This is where it all starts for me. Starting with this small bond. I too want to become someone who is needed, instead of a weapon that is feared. And as the Kazekage of Sunagakure.",
        id : 244
      },
      {
        name : "Gaara",
        quote : "I know him well. He takes too many risks when it comes to his friends...that's why.",
        id : 245
      },
      {
        name : "Gaara",
        quote : "*to Naruto* I think of you as a friend. I used to think \"friend\" was just another word... Nothing more, nothing less. But when I met you, I realized what was important was the word's meaning.",
        id : 246
      },
      {
        name : "Gaara",
        quote : "*to Naruto* If you're truly prepared to take up the mantle of a Kage, then as Sasuke's friend, you know what you have to do.",
        id : 247
      },
      {
        name : "Gaara",
        quote : "Peace under an illusion is not a true peace. It's only meaningful if the real world manages to accomplish it.",
        id : 248
      },
      {
        name : "Gaara",
        quote : "When did you forsake yourselves?",
        id : 249
      },
      {
        name : "Gaara",
        quote : "Up until now, my bonds with others have only been ones of hatred and murder. But, seeing him fight so hard made me wonder what a bond really is. I think I understand a little now. Suffering, sadness...and joy. To be able to share it with another person. Naruto Uzumaki...when I fought him, I feel that is what he taught me.",
        id : 250
      },
      {
        name : "Gaara",
        quote : "Perhaps the companionship of an evil person is preferable to loneliness.",
        id : 251
      },
      {
        name : "Gaara",
        quote : "You're the same then. When you feel the honor of your idol under scrutiny... you become enraged, as if it were your own honor being questioned. The more precious your idol is to you... the harder you fight for him.",
        id : 252
      },
      {
        name : "Gaara",
        quote : "I shall kill you. I will not cease to exist.",
        id : 253
      },
      {
        name : "Gaara",
        quote : "*to Sasuke* You have the same eyes as I do...the eyes, filled with hatred and death, that long for strength... Just like mine. Your eyes tell me how badly you wish to kill the one who put you through the hell called loneliness.",
        id : 254
      },
      {
        name : "Gaara",
        quote : "I am a relic they want to get rid of, so why do I exist and live? In order to exist you need a purpose, to exist for no reason is the same as being dead... I would love only myself and fight for only myself. If all other people exist to magnify that love, then there is no more a splendid universe than this one...",
        id : 255
      },
      {
        name : "Gaara",
        quote : "The corpse's bitter crimson tears flow and mingle with the endless sand, filling the chaos within me - and making me stronger.",
        id : 256
      },
      {
        name : "Gaara",
        quote : "I finally understand... I'm alone. I won't believe in anyone, or love anyone. I'm alone.",
        id : 257
      },
      {
        name : "Gaara",
        quote : "What does pain feel like?",
        id : 258
      },
      {
        name : "Anko Mitarashi",
        quote : "I wasn't cast aside. It was my choice, and mine alone.",
        id : 259
      },
      {
        name : "Anko Mitarashi",
        quote : "*to Orochimaru* But why? How could you do this!? I don't get it, I've looked up to you more than anyone in the world!",
        id : 260
      },
      {
        name : "Anko Mitarashi",
        quote : "*about Sasuke* I don't care what the heck he is! If he stays, he's a danger to everyone! Don't you see!? As he gets stronger, so does the Curse Mark! That thing is feeding off his chakra! It's a Forbidden Jutsu that devours the one who bears it! It's incredible the kid's still standing. By now, he...should be dead.",
        id : 261
      },
      {
        name : "Anko Mitarashi",
        quote : "*to Naruto* Tough guys like you usually leave their blood all over this forest.",
        id : 262
      },
      {
        name : "Might Guy",
        quote : "He was a worthy opponent! A man who lived and died like a real shinobi! Kisame Hoshigaki! I'll remember that name for the rest of my life!",
        id : 263
      },
      {
        name : "Might Guy",
        quote : "*to Kisame* A failure will win even at the cost of their own life!",
        id : 264
      },
      {
        name : "Might Guy",
        quote : "That's it, Lee! Let the power of youth explode!!",
        id : 265
      },
      {
        name : "Might Guy",
        quote : "When a man struts around like a peacock, acting like Mr. Big Stuff, he should keep his promises. Even if it kills him.",
        id : 266
      },
      {
        name : "Might Guy",
        quote : "Gahh! Kakashi! You make me so mad! Why do you have to act so cool?!",
        id : 267
      },
      {
        name : "Might Guy",
        quote : "You have the gift of perseverance, and that's what makes you a genius too!",
        id : 268
      },
      {
        name : "Might Guy",
        quote : "Don't let anything stir you up the path you have drawn for yourself! Forge ahead in the end! Stick to it Lee! Make me proud! Be everything you can be!",
        id : 269
      },
      {
        name : "Might Guy",
        quote : "You worked hard Lee, there's no doubt in my mind the surgery will be a success. You have the power to shape your own destiny. And on the one-in-one thousand, no, one in a million chance something to happen to go wrong, I will die right along with you. Since the day I met you, my nind?? has been to train you to become the most splendid ninja possible. That's a promise!",
        id : 270
      },
      {
        name : "Might Guy",
        quote : "*to Neji* I was a failure when I was your age, but now I can even beat Kakashi, the elite genius. It's only a matter of time until Lee finally surpasses you!",
        id : 271
      },
      {
        name : "Might Guy",
        quote : "People call me the Leaf's Noble Gentleman!",
        id : 272
      },
      {
        name : "Might Guy",
        quote : "That's it, Lee! Run...run towards the setting sun!... But don't mess up your hair!",
        id : 273
      },
      {
        name : "Might Guy",
        quote : "Look deep into my eyes and accept my sincere apology! Also notice my handsome manly features.",
        id : 274
      },
      {
        name : "Might Guy",
        quote : "*to Kakashi* What is with your attitude?! We'll never be young like this again!",
        id : 275
      },
      {
        name : "Shino Aburame",
        quote : "I kind of hate him.",
        id : 276
      },
      {
        name : "Shino Aburame",
        quote : "If you fight me, you won't be able to recover. Forfeit and withdraw.",
        id : 277
      },
      {
        name : "Shino Aburame",
        quote : "Never underestimate your opponent, no matter how small they may seem.",
        id : 278
      },
      {
        name : "Shino Aburame",
        quote : "Even if it's been a while, you should remember your comrades faces. Why? Because otherwise you will hurt their feelings when they call out to you.",
        id : 279
      },
      {
        name : "Shino Aburame",
        quote : "I hate explaining the same thing twice.",
        id : 280
      },
      {
        name : "Kiba Inuzuka",
        quote : "If I kick enough asses I might even end up Hokage!",
        id : 281
      },
      {
        name : "Kiba Inuzuka",
        quote : "Let's die together.",
        id : 282
      },
      {
        name : "Kiba Inuzuka",
        quote : "*to Naruto* You? Hokage? You can't even beat me! No-one's deluded enough to think that you have what it takes to become the next Hokage, not even you! Tell you what, though... I'll become Hokage in your place!",
        id : 283
      },
      {
        name : "Kiba Inuzuka",
        quote : "Don't think you can run away from my nose.",
        id : 284
      },
      {
        name : "Kiba Inuzuka",
        quote : "Heh, I don't know what's going on, but I'm always up for getting wild.",
        id : 285
      },
      {
        name : "Kiba Inuzuka",
        quote : "Yahoo! Akamaru, let's do this!",
        id : 286
      },
      {
        name : "Chouji Akimichi",
        quote : "I'm gonna eat until I can eat no more!",
        id : 287
      },
      {
        name : "Chouji Akimichi",
        quote : "I can't forgive you for calling me fat! But even more than that... Not just for stealing the last chip... or calling me fat... most importantly I won't forgive anyone who insults my best friend!",
        id : 288
      },
      {
        name : "Chouji Akimichi",
        quote : "Fat!? I'm big boned!",
        id : 289
      },
      {
        name : "Chouji Akimichi",
        quote : "*to Shikamaru* I won't let even YOU eat the last barbecue chip!",
        id : 290
      },
      {
        name : "Nara Shikamaru",
        quote : "My master entrusted me with a lot, from big things to little things. It's the same for you an unlimited number of things, don't you think it's about time for us, to be the ones who entrust not the entrusted, it's a pain in the ass but I can't say that. Someday you'll be the one to treat others to ramen and you'll be called Master Naruto... We can't stay kids forever, like Asuma and Jiraiya, I wanna be as cool as them.",
        id : 291
      },
      {
        name : "Nara Shikamaru",
        quote : "*about Temari* Subtle as a rhino... she might even be scarier than my mom.",
        id : 292
      },
      {
        name : "Nara Shikamaru",
        quote : "*about women, to his father* If women made you a better person, I wouldn't want to know what you were like before.",
        id : 293
      },
      {
        name : "Nara Shikamaru",
        quote : "*about girls* C'mon. You know what they're like. You can never figure them out. You never know where you could stand with them. The smallest things could put you in their bad side. Always playing little mind games with you. Trying to make you do what they want. They're just a big pain basically.",
        id : 294
      },
      {
        name : "Nara Shikamaru",
        quote : "When you have that kid, I'll have to protect it. So I've gotta grow up to be a cool adult too!",
        id : 295
      },
      {
        name : "Nara Shikamaru",
        quote : "We're not stupid enough to go out there planning to die.",
        id : 296
      },
      {
        name : "Nara Shikamaru",
        quote : "*to Hidan* That pathetic Lord Jashin or whatever isn't your God anymore. I am. The only one bringing down vengeance is me.",
        id : 297
      },
      {
        name : "Nara Shikamaru",
        quote : "*to Hidan* See, you and I have different beliefs. I believe in the Will of Fire.",
        id : 298
      },
      {
        name : "Nara Shikamaru",
        quote : "Ughh. Great. What's the point in setting the alarm if I'm going to wake up before it goes off? What a total waste. Now I've gotta shut it off but I don't feel like moving. But if I don't shut it off it will just keep ringing and ringing. Sigh. It makes me tired just thinking about the whole thing. Some mornings are such a drag...",
        id : 299
      },
      {
        name : "Nara Shikamaru",
        quote : "How many times do I have to tell you? The first move is always a feint.",
        id : 300
      },
      {
        name : "Nara Shikamaru",
        quote : "I never really liked Sasuke, but all the same, he's a member of the Hidden Leaf village, he's a comrade and I'll put my life on the line to help him, that's the way of our village. I know I usually seem like a pretty lazy guy, but not today. Because now, I'm responsible for your lives too.",
        id : 301
      },
      {
        name : "Nara Shikamaru",
        quote : "Sometimes I wish I was just a cloud, floating along.",
        id : 302
      },
      {
        name : "Nara Shikamaru",
        quote : "*about Ino* What a drag... I say a single thing against Sasuke, and I have to get that evil look from her eyes.",
        id : 303
      },
      {
        name : "Ino Yamanaka",
        quote : "Who're you calling \"pig\", you billboard brow?!",
        id : 304
      },
      {
        name : "Ino Yamanaka",
        quote : "*to Sakura* You bloomed into a beautiful flower.",
        id : 305
      },
      {
        name : "Ino Yamanaka",
        quote : "*talking about Naruto* I could almost fall for him.",
        id : 306
      },
      {
        name : "Rock Lee",
        quote : "Wise words, Guy sensei! So simple but filled with such profound meaning!",
        id : 307
      },
      {
        name : "Rock Lee",
        quote : "The lotus of the Leaf Village blooms twice.",
        id : 308
      },
      {
        name : "Rock Lee",
        quote : "I want to show I can be a splendid ninja as well even if I don't have ninjutsu or genjutsu... I want to prove it to the whole world!",
        id : 309
      },
      {
        name : "Rock Lee",
        quote : "Sakura, please go out with me! I'll protect you with my life!",
        id : 310
      },
      {
        name : "Rock Lee",
        quote : "A rock thrown at a pole will not hit, but if one does not aim at the pole, it will hit! That is the law I used!",
        id : 311
      },
      {
        name : "Tenten",
        quote : "Amazing... The brilliance of the blade... the design. They're all beautiful! I want to take them all home!",
        id : 312
      },
      {
        name : "Tenten",
        quote : "Three members of Team Guy specializes in Close-Contact battles so I often render aid from the distance. I don't mind providing back up, but I was hoping to find new ninja tools that would enable me to fight on the front lines.",
        id : 313
      },
      {
        name : "Tenten",
        quote : "You're gonna fight Sasuke alone? And you think all of us are just gonna stand here and let you?!",
        id : 314
      },
      {
        name : "Tenten",
        quote : "Let's just say I don't like being kept in the dark!",
        id : 315
      },
      {
        name : "Tenten",
        quote : "I'm not running away and I'm not giving up. I will save this child.",
        id : 316
      },
      {
        name : "Tenten",
        quote : "I won't let that happen. You're not getting off that easy. No way! The people you and Raiga killed, they all wanted to live but you didn't leave them that choice! You decided for them! Well you don't get to decide this time, ok?! You're gonna live and you're going to take some responsibility for all those people's lives you cut short!",
        id : 317
      },
      {
        name : "Tenten",
        quote : "I can't stand weak and indecisive people!",
        id : 318
      },
      {
        name : "Tenten",
        quote : "It's not because they're girls you know, Neji. It's just that those two are using kid gloves. It doesn't matter if you're a man or woman in battle.",
        id : 319
      },
      {
        name : "Hiruzen Sarutobi",
        quote : "*last words* When the tree leaves dance, one shall find flames. The fire's shadow will illuminate the village, and once again, tree leaves shall bud anew.",
        id : 320
      },
      {
        name : "Hiruzen Sarutobi",
        quote : "It is a place where every year shinobi are born, raised, grow old, fight, and die to protect their home. These people are precious to me. We share a home, we share a life, and though we may not share ties of blood, they are precious to me. They are my family. And if I do fall, you still will fail. I am only one of a long line. I carry this title in trust for those Hokage who came before and those who will come after. I am the Third Hokage!",
        id : 321
      },
      {
        name : "Hiruzen Sarutobi",
        quote : "I wonder...do you have it, young as you are... the Will of Fire?",
        id : 322
      },
      {
        name : "Hiruzen Sarutobi",
        quote : "He has combined Shadow Clone with his own invention, the Sexy Jutsu. What a foolish ninja technique...and he could probably get me with it, too.",
        id : 323
      },
      {
        name : "Tsunade",
        quote : "I am the Fifth Hokage... You've trampled on our ancestors treasure...their dream...and you will pay the price! As the Hokage, I will put a stop to you here and now!",
        id : 324
      },
      {
        name : "Tsunade",
        quote : "*talking to the advisers* People like Jiraiya...and Sarutobi, and Elder Chiyo of the Sand possessed something you two sorely lack. Do you know what that is!? ...Faith! My grandfather, the First Hokage, believed in you and entrusted you with the village. Now it's your turn to believe in these children and entrust it to them!",
        id : 325
      },
      {
        name : "Tsunade",
        quote : "Grow up... Death comes with being a shinobi. There are times when death is hard to accept, but if you don't get over it, there's no future...",
        id : 326
      },
      {
        name : "Tsunade",
        quote : "*to Orochimaru about Naruto* \"I will die before I let you touch him!",
        id : 327
      },
      {
        name : "Tsunade",
        quote : "Why am I putting my life on the line? Because now... I am the Fifth Hokage of the Village Hidden in the Leaves!",
        id : 328
      },
      {
        name : "Tsunade",
        quote : "Jiraiya, are you the one who taught him the Rasengan? Are you acting like a teacher by teaching him something he can't master? Don't give him any ideas! That's why this kid likes to daydream that he's going to become Hokage someday.",
        id : 329
      },
      {
        name : "Tsunade",
        quote : "*about to fight Naruto* One of the Legendary Sannin taking on a snot-nosed Genin... I oughta be ashamed of myself.",
        id : 330
      },
      {
        name : "Kisame Hoshigaki",
        quote : "*last words* Itachi-san... It seems that in the end... I'm not so terrible after all.",
        id : 331
      },
      {
        name : "Kisame Hoshigaki",
        quote : "I get stronger in direct proportion to how strong my opponent is. I do not tire, and cannot be defeated.",
        id : 332
      },
      {
        name : "Kisame Hoshigaki",
        quote : "*to Asuma* My massive blade, Samehada, doesn't slice... It shreds to ribbons!",
        id : 333
      },
      {
        name : "Kisame Hoshigaki",
        quote : "Sharks start out as eggs, but incubate and hatch in the womb. Sometimes the number of pups is less than the number of eggs that were fertilized. Do you know why? Cannibalism. The pups start eating each other within the mother's womb the moment they hatch. They start killing their siblings the moment they enter the world, viewing everything they see as nothing more than prey. As of today you and I are fellow members of Akatsuki. So be careful... of me.",
        id : 334
      },
      {
        name : "Kisame Hoshigaki",
        quote : "I knew that from the first time I had to kill my comrades... Kill a Kiri ninja as a Kiri ninja. What does that make me? Am I a friend or foe? What is my purpose and my position? Where do I go? Where can I go? I'm well aware that my entire life has been a one giant lie.",
        id : 335
      },
      {
        name : "Zabuza Momochi",
        quote : "*to Kakashi* I died as a human!",
        id : 336
      },
      {
        name : "Zabuza Momochi",
        quote : "*last words* You were always at my side, the least I can do is to be beside you at the end. I know it cannot be, but I wish I could go to where you have gone. How I wish I could join you there, Haku.",
        id : 337
      },
      {
        name : "Zabuza Momochi",
        quote : "Even the unremarkable Demon of the Hidden Mist can die and become a real Demon in hell!",
        id : 338
      },
      {
        name : "Zabuza Momochi",
        quote : "Uh uh...I won't be joining Haku. Where he's gone I cannot follow. We wouldn't be welcome where Haku's gone to. Hell's where WE'RE going, Gat??!",
        id : 339
      },
      {
        name : "Zabuza Momochi",
        quote : "Well? Cat got your tongue? Are you so surprised to discover that I'm human? Even shinobi are human. No matter how hard we try, we always fail to escape that simple fact. Well at least, I have failed.",
        id : 340
      },
      {
        name : "Zabuza Momochi",
        quote : "*to Naruto* Your words cut deep, deeper than any blade.",
        id : 341
      },
      {
        name : "Zabuza Momochi",
        quote : "When you've hovered between life and death so many times that it doesn't faze you, you may be called a ninja. When you've become so deadly that your profile has been entered into my bingo book, then you may have earned the title ninja.",
        id : 342
      },
      {
        name : "Zabuza Momochi",
        quote : "You're right. Those little people and their little dreams, why should I care about them?! I have my own dream!",
        id : 343
      },
      {
        name : "Zabuza Momochi",
        quote : "When I was your age, my hands were already soaked in blood...",
        id : 344
      },
      {
        name : "Hinata Hyuuga",
        quote : "I used to always cry and give up... I made many wrong turns... But you... You helped me find the right path... I always chased after you... I wanted to catch up to you... I wanted to walk beside you all the time... I just wanted to be with you... You changed me! Your smile is what saved me! That is why I'm not afraid to die protecting you! Because... I love you...",
        id : 345
      },
      {
        name : "Hinata Hyuuga",
        quote : "I won't let you lay another finger on Naruto!",
        id : 346
      },
      {
        name : "Hinata Hyuuga",
        quote : "*to Naruto* You make mistakes... but... because of those mistakes... you get the strength to stand up to them. That's why I think you are truly strong.",
        id : 347
      },
      {
        name : "Hinata Hyuuga",
        quote : "*to Naruto* When I watch you, I feel strong, like I can do anything - that even I am worth something.",
        id : 348
      },
      {
        name : "Hinata Hyuuga",
        quote : "You're wrong, Neji... Because I can see that you are suffering more than me... You are the one who is confused and suffering inside the fate of the head and branch families.",
        id : 349
      },
      {
        name : "Hinata Hyuuga",
        quote : "Was I able to change myself...even a little, N-Naruto-kun?",
        id : 350
      },
      {
        name : "Hinata Hyuuga",
        quote : "I will never go back on my word, because that too is my ninja way!",
        id : 351
      },
      {
        name : "Haku",
        quote : "By the way, I'm a boy.",
        id : 352
      },
      {
        name : "Naruto Uzumaki",
        quote : "My name is Uzumaki Naruto. I like ramen. I hate the three minutes you have to wait while the water boils. And my dream is to one day become a Hokage. Then everyone will have to respect me at last.",
        id : 353
      },
      {
        name : "Kankuro",
        quote : "Sasori...your strength came because of your soul, not in spite of it. You tried to erase it, to become a puppet yourself, but couldn't change completely. Now you've got your immortal body, but you've fallen, sunk to the level of the puppets you used to control. You were supposed to be a top class ninja puppeteer, not a worthless nobody who lets someone else pull the strings.",
        id : 354
      },
      {
        name : "Kankuro",
        quote : "How well or poorly we execute our ambush will have a huge impact on this war and how many casualties we suffer. If you wanna protect your friends and family, the only thing you should be thinking about is how to make this operation a success!",
        id : 355
      },
      {
        name : "Kankuro",
        quote : "*to Naruto* Aww, don't sweat it. Women always go weak in the knees for that cool, elite type of guy. So what can you do, am I right?",
        id : 356
      },
      {
        name : "Kankuro",
        quote : "I'll show you the real power of the battle puppet Crow.",
        id : 357
      },
      {
        name : "Kankuro",
        quote : "I can't back down when they show me no respect.",
        id : 358
      },
      {
        name : "Kankuro",
        quote : "*thinking about Naruto* This brat...I'm going to kill him.",
        id : 359
      },
      {
        name : "Itachi Uchiha",
        quote : "Growth occurs when one goes beyond one's limits. Realizing that is also part of training.",
        id : 360
      },
      {
        name : "Itachi Uchiha",
        quote : "*last words* Forgive me Sasuke... It ends with this.",
        id : 361
      },
      {
        name : "Itachi Uchiha",
        quote : "*to Kisame* Those who turn their hands against their comrades are sure to die a terrible death. Be prepared.",
        id : 362
      },
      {
        name : "Itachi Uchiha",
        quote : "The people of this clan are all the same. You focus on the trivial, and lose sight of what's most important. Change is impossible, in this fog of ignorance. How can we evolve when regulation is all we know?",
        id : 363
      },
      {
        name : "Itachi Uchiha",
        quote : "I've had enough, there's no hope left for this pathetic clan.",
        id : 364
      },
      {
        name : "Itachi Uchiha",
        quote : "Don't cry, Sasuke. Your big brother is here to protect you, no matter what happens.",
        id : 365
      },
      {
        name : "Itachi Uchiha",
        quote : "You and I are flesh and blood. I'm always going to be there for you, even if it's only as an obstacle for you to overcome. Even if you do hate me. That's what big brothers are for.",
        id : 366
      },
      {
        name : "Obito Uchiha",
        quote : "*last words* Just when me and Kakashi were becoming friends... I couldn't bring myself to confess to Rin... I wish I had more time with everyone...",
        id : 367
      },
      {
        name : "Obito Uchiha",
        quote : "*to Kakashi* I'm about to... die... but I'll become your eye.",
        id : 368
      },
      {
        name : "Obito Uchiha",
        quote : "I believe the \"White Fang\" is a true hero!",
        id : 369
      },
      {
        name : "Obito Uchiha",
        quote : "*to Kakashi* I am Uchiha Obito and I will surpass you once I awaken my Sharingan!",
        id : 370
      },
      {
        name : "Sasuke Uchiha",
        quote : "I have already awakened.",
        id : 371
      },
      {
        name : "Naruto Uzumaki",
        quote : "I don't understand what's going on, but I'll just pretend that I do. *nods head in agreement*",
        id : 372
      },
      {
        name : "Kabuto Yakushi",
        quote : "*to Naruto* Finding a new me, that is the lesson you taught me.",
        id : 373
      },
      {
        name : "Kabuto Yakushi",
        quote : "I decided I wished to be like you as well, Naruto-kun, and for that reason...with Orochimaru-sama now intregrated into this body, I plan on finding a new \"me\", one stronger than Orochimaru-sama himself!",
        id : 374
      },
      {
        name : "Kabuto Yakushi",
        quote : "Hehehe...you can't beat me. You have no skills, unlike Sasuke.",
        id : 375
      },
      {
        name : "Kabuto Yakushi",
        quote : "Little kids think life is so easy. That's why they go on and on about their dreams. That's why they never give up.",
        id : 376
      },
      {
        name : "Kabuto Yakushi",
        quote : "Oh you look so beautiful... We're not here for a picnic you know.",
        id : 377
      },
      {
        name : "Sasuke Uchiha",
        quote : "Don't worry, this will be over in five seconds.",
        id : 378
      },
      {
        name : "Naruto Uzumaki",
        quote : "We're just some normal ninja, we don't want to see what's under your mask.",
        id : 379
      },
      {
        name : "Iruka Umino",
        quote : "*to Naruto* Lord Jiraiya only had praise for you. He was always boasting about you, saying you were like his own grandchild. He had faith that you were the one who would inherit his will, and truly believed that you would one day be a great Hokage. Lord Jiraiya will always watch over you. Even this very minute, he's watching from somewhere. He wouldn't be happy seeing you sad like this. So...be your usual self, the one he praised so much. Don't stay depressed forever. For Lord Jiraiya himself, one of the Legendary Sannin...acknowledged you as his promising student!",
        id : 380
      },
      {
        name : "Iruka Umino",
        quote : "So I acted like an idiot. It was tough, has it been lonely for you Naruto, was it tough Naruto??",
        id : 381
      },
      {
        name : "Itachi Uchiha",
        quote : "We are humans, not fish. We don't know what kind of people we truly are until the moment before our deaths. As death comes to embrace you, you will realize what you are. That's what death is, don't you think?",
        id : 382
      },
      {
        name : "Itachi Uchiha",
        quote : "You are weak. Why are you so weak? Because you lack... hatred.",
        id : 383
      },
      {
        name : "Rock Lee",
        quote : "If I can't do 400 push-ups, I'll hit the dummy 800 times! If I can't hit the dummy 800 times, I'll do 2000 jump ropes!",
        id : 384
      },
      {
        name : "Rock Lee",
        quote : "I am the Handsome Devil of the Hidden Leaf Village! My name is Rock Lee!",
        id : 385
      },
      {
        name : "Rock Lee",
        quote : "Guy-sensei is the coolest! He practically GLOWS with cool!",
        id : 386
      },
      {
        name : "Jiraiya",
        quote : "Stop calling me Ero-sennin!!",
        id : 387
      },
      {
        name : "Jiraiya",
        quote : "Baka, baka, baka!! They found out I was peeking! Now my research is ruined!",
        id : 388
      },
      {
        name : "Naruto Uzumaki",
        quote : "The only thing that can keep a fire from dying and give it more power, is wind.",
        id : 389
      },
      {
        name : "Naruto Uzumaki",
        quote : "If I become as strong as you, will I really become like you? To die as a tool...that's...that's just too sad.",
        id : 390
      },
      {
        name : "Jiraiya",
        quote : "*last words* The Tale of Naruto Uzumaki... yes... that has a nice ring to it.",
        id : 391
      },
      {
        name : "Jiraiya",
        quote : "There, that ending...was a little better. The frog at the bottom of the well drifts off into the great ocean. Heh heh ...yep. Pretty damn honorable... pretty damn honorable...",
        id : 392
      },
      {
        name : "Jiraiya",
        quote : "*to Naruto* I think we all have to acknowledge you. Gamatatsu, Gamakichi, Sakura, Tsunade...and I... We all admit you've worked really hard. But I wonder what's pushing you forward.",
        id : 393
      },
      {
        name : "Jiraiya",
        quote : "Never go back on your word...and never give up. That's your ninja way...and as your mentor ... I have no business whining! Because the student's ninja way should be the master's too! Isn't that so, Naruto?!",
        id : 394
      },
      {
        name : "Jiraiya",
        quote : "*to Orochimaru about Sasuke* Because it's no fun to train a genius!",
        id : 395
      },
      {
        name : "Jiraiya",
        quote : "*to Orochimaru* You're wrong, that's not what makes a shinobi. You never did get it, a real ninja is one who endures no matter what gets thrown at him... Let me explain something to you, there is only one thing that matters if you are a shinobi, and it isn't the number of jutsu you possess. All you do need, is the guts to never give up.",
        id : 396
      },
      {
        name : "Jiraiya",
        quote : "*to Naruto* Even I can tell that hatred is spreading. I wanted to do something about it...but I don't know what. I believe... that someday the day will come when people truly understand one another!! If I can't find the answer, it will be up to you to do it!!",
        id : 397
      },
      {
        name : "Jiraiya",
        quote : "When people get hurt, they learn to hate... When people hurt others, they become hated and racked with guilt. But knowing that pain allows people to be kind. Pain allows people to grow... and how you grow is up to you.",
        id : 398
      },
      {
        name : "Jiraiya",
        quote : "Wherever someone thinks of you, that's where home is.",
        id : 399
      },
      {
        name : "Jiraiya",
        quote : "I'm not a pervert... I'm a super pervert!",
        id : 400
      },
      {
        name : "Jiraiya",
        quote : "Die! Just Die! You have no talent at all!!",
        id : 401
      },
      {
        name : "Jiraiya",
        quote : "Shut up you flat-chested bitch Tsunade!",
        id : 402
      },
      {
        name : "Neji Hyuuga",
        quote : "You are the strongest enemy I have ever fought.",
        id : 403
      },
      {
        name : "Neji Hyuuga",
        quote : "No one can determine another's destiny.",
        id : 404
      },
      {
        name : "Neji Hyuuga",
        quote : "The heavens will not allow a pawn who can only seek victory at the cost of himself to advance...",
        id : 405
      },
      {
        name : "Neji Hyuuga",
        quote : "*about Gai* He's so childish. He acts like a seven-year-old!",
        id : 406
      },
      {
        name : "Neji Hyuuga",
        quote : "*about Lee and Gai* As usual, I can't keep up with their craziness.",
        id : 407
      },
      {
        name : "Neji Hyuuga",
        quote : "Because Naruto... you saved me from the darkness.",
        id : 408
      },
      {
        name : "Neji Hyuuga",
        quote : "All this time I've been called a genius, so I cannot lose.",
        id : 409
      },
      {
        name : "Neji Hyuuga",
        quote : "Sasuke's out there right now, heading toward Orochimaru. We can't allow such evil to take someone from our village... that is not our way.",
        id : 410
      },
      {
        name : "Neji Hyuuga",
        quote : "Naruto... Sometimes, your eyes are even better than mine.",
        id : 411
      },
      {
        name : "Neji Hyuuga",
        quote : "Father, is a person's destiny a thing like a cloud flowing with an inescapable flow? Or can a person choose the flow he wishes... I still don't know the answer to this. Either way the destination may be the same in the end. However by choosing to live like the latter, a person can live and strive towards a goal. And in this match I have finally understood those who have that are truly strong. Father, I have but one goal, I want to become stronger... Enough not to lose to anyone... That's how I feel. Father, the birds are flying freely today... They look so happy.",
        id : 412
      },
      {
        name : "Neji Hyuuga",
        quote : "There's no method but death to escape this horrible curse.",
        id : 413
      },
      {
        name : "Neji Hyuuga",
        quote : "*to Naruto* These eyes of mine show me many things. One thing they've shown me...people's limitations are set, fixed, and unchangeable. Only a fool wastes his time trying to become something he can never be!",
        id : 414
      },
      {
        name : "Neji Hyuuga",
        quote : "Do you understand now? You have no way of beating me!",
        id : 415
      },
      {
        name : "Neji Hyuuga",
        quote : "Once a failure, always a failure. You can't change that.",
        id : 416
      },
      {
        name : "Neji Hyuuga",
        quote : "Right now, Sasuke is in the darkness. The only one who can save him is you, Naruto.",
        id : 417
      },
      {
        name : "Naruto Uzumaki",
        quote : "Try it trash! I'll return the pain a thousand times over!",
        id : 418
      },
      {
        name : "Jiraiya",
        quote : "I am, Jiraiya, the epitome of manliness! I shall fall for no woman's wiles! When you're me, you only need to flash that sexiness to have women fall at your feet.",
        id : 419
      },
      {
        name : "Ino Yamanaka",
        quote : "WHAT?! Why wasn't he affected by my sexiness?!",
        id : 420
      },
      {
        name : "Ino Yamanaka",
        quote : "SHIKAMARU! Beat her up with a 16 HIT COMBO!",
        id : 421
      },
      {
        name : "Ino Yamanaka",
        quote : "There's no meaning to a flower unless it blooms.",
        id : 422
      },
      {
        name : "Gaara",
        quote : "A soul needs a purpose to live...and so I concluded that my purpose was to kill everyone besides myself. I felt alive...",
        id : 423
      },
      {
        name : "Gaara",
        quote : "I fight for my sake only and live to love no one but myself.",
        id : 424
      },
      {
        name : "Gaara",
        quote : "*young Gaara attempts to slash his wrist* It's no use, the sand gets in the way.",
        id : 425
      },
      {
        name : "Madara Uchiha",
        quote : "The concept of hope is nothing more than giving up. A word that holds no true meaning.",
        id : 426
      },
      {
        name : "Madara Uchiha",
        quote : "The Uchiha is a clan destined for revenge...",
        id : 427
      },
      {
        name : "Madara Uchiha",
        quote : "*to Minato, about his reason for attacking Konoha* Oh, you know...it's fun, it's part of my plan...to start a war...to bring peace...",
        id : 428
      },
      {
        name : "Madara Uchiha",
        quote : "It will be a new world... A world of truth, not lies.",
        id : 429
      },
      {
        name : "Madara Uchiha",
        quote : "When a man learns to love, he must bear the risk of hatred.",
        id : 430
      },
      {
        name : "Hatake Kakashi",
        quote : "*to Sasuke* No matter how far Orochimaru fell, he still loved him... Now I know how the Third Hokage felt.",
        id : 431
      },
      {
        name : "Hatake Kakashi",
        quote : "*to Sakumo* Regardless of what happened, you did the best you could. I understand that now...you broke the rules for all our sakes - I'm proud of you now...",
        id : 432
      },
      {
        name : "Hatake Kakashi",
        quote : "*to Naruto* You've become as strong...if not stronger than me.",
        id : 433
      },
      {
        name : "Hatake Kakashi",
        quote : "Like the fate of the two who founded the village of Konoha... Naruto and Sasuke...your fates are like theirs.",
        id : 434
      },
      {
        name : "Hatake Kakashi",
        quote : "This place makes me think about the mistakes I've made in the past... and I've made a lot.",
        id : 435
      },
      {
        name : "Hatake Kakashi",
        quote : "*to Orochimaru* I don't care if you are one of the legendary Sannin, the great shinobi of legend, I swear take one more step towards Sasuke and one of us will die here!",
        id : 436
      },
      {
        name : "Hatake Kakashi",
        quote : "I'm Kakashi Hatake. Things I like and things I hate...I don't feel like telling you that. My dreams for the future...never really thought about it. As for my hobbies...I have lots of hobbies.",
        id : 437
      },
      {
        name : "Rock Lee",
        quote : "A genius, huh? What does that mean? \"Genius\"? So I was not born with a whole lot of natural talent, not gifted like Neji ...but I work hard and I never give up! That is my gift, that is my ninja way!",
        id : 438
      },
      {
        name : "Orochimaru",
        quote : "*to Sasuke* I refuse...to let this happen! I am Orochimaru! I am immortal! I will not die here! Destined to discover the true meaning behind everything! Destined to take control of everything in this world!!",
        id : 439
      },
      {
        name : "Orochimaru",
        quote : "When there is a true desire in the heart and that desire is strong... That is when he finds real strength that even he did not know he had!",
        id : 440
      },
      {
        name : "Orochimaru",
        quote : "Everything will be mine.",
        id : 441
      },
      {
        name : "Orochimaru",
        quote : "*about Sasuke* When I watch this boy, I look back to the time I was called a genius, and think how ridiculous it was.",
        id : 442
      },
      {
        name : "Orochimaru",
        quote : "*to Sasuke* How impressive. A thousand foes stand before you and you don't even bat an eyelid.",
        id : 443
      },
      {
        name : "Orochimaru",
        quote : "*talking about Naruto* This child... intrigues me to no end!",
        id : 444
      },
      {
        name : "Orochimaru",
        quote : "Hate only gives birth to even more hate.",
        id : 445
      },
      {
        name : "Orochimaru",
        quote : "I want to obtain all the jutsu and gain a true understanding of everything in this world. The first one to mix blue and yellow called the new color \"green\". I want to do something similar to that. If blue is the chakra, then yellow is the seal, and green is the jutsu... Just as there is no end to the variety of colors, there are so many thousands...tens of thousands of jutsu in the world as well. But in order to obtain every possible jutsu and truth, it would require an eternity. Only one who understands everything after spending such time on this can be fittingly called the Ultimate Being.",
        id : 446
      },
      {
        name : "Orochimaru",
        quote : "*to Kabuto, talking about Tsunade) The best medicines always taste bitter.",
        id : 447
      },
      {
        name : "Orochimaru",
        quote : "There probably isn't any meaning in life. Perhaps you can find something interesting to do while you are alive. Like how you found that flower. Like how I found you.",
        id : 448
      },
      {
        name : "Sakura Haruno",
        quote : "Naruto's here because he's made up his mind. My resolve is nothing compared to his now! I'm supposed to be a ninja, but all I've ever done is lean on him and cry... I was supposed to change that... I came here and I thought I was ready. But I can't do anything... I can't say anything. The only thing that remains for me...is to believe in them!",
        id : 449
      },
      {
        name : "Sakura Haruno",
        quote : "*about killing Sasuke* I... Sasuke... I... I thought I could do this...",
        id : 450
      },
      {
        name : "Sakura Haruno",
        quote : "I'm the one who made Naruto suffer the most... I've just been getting it wrong. Just been messing it up... I don't want to get it wrong anymore...don't want to screw it up anymore.",
        id : 451
      },
      {
        name : "Sakura Haruno",
        quote : "A smile is the easiest way out of a difficult situation.",
        id : 452
      },
      {
        name : "Sakura Haruno",
        quote : "*to Sasuke* I... I love you with all my heart!.. If you were to stay here with me, there would be no regrets...because every day we'd do something fun, we'd be happy I swear..! I would do anything for you! So...please, just stay with me!",
        id : 453
      },
      {
        name : "Sakura Haruno",
        quote : "I've always considered myself to be a true ninja...but those were just empty words, because Sasuke and Naruto were always in the lead! But now it's my turn to take the lead, and all of you can watch me from the background!",
        id : 454
      },
      {
        name : "Sakura Haruno",
        quote : "*to Ino* Didn't you know? Women have to be strong in order to survive!",
        id : 455
      },
      {
        name : "Sakura Haruno",
        quote : "All I've been doing is watching you two from behind... Now, get a good look at MY back!",
        id : 456
      },
      {
        name : "Sakura Haruno",
        quote : "*talking to Sasuke* On that day, you taught me that solitude is painful! I understand that so well right now. I have family, and I have friends but if you're gone... To me... It will be the same as being alone.",
        id : 457
      },
      {
        name : "Hatake Kakashi",
        quote : "In the ninja world, those who break the rules are scum, that's true, but those who abandon their friends are worse than scum.",
        id : 458
      },
      {
        name : "Hatake Kakashi",
        quote : "I won't allow my comrades to die. I'll protect you with my life. Trust me.",
        id : 459
      },
      {
        name : "Hatake Kakashi",
        quote : "The next generation will always surpass the previous one. It's one of the never-ending cycles in life.",
        id : 460
      },
      {
        name : "Hatake Kakashi",
        quote : "*making excuses for being late, as usual* Hello students, today I got lost on the road of life.",
        id : 461
      },
      {
        name : "Hatake Kakashi",
        quote : "*making excuses for being late, as usual* A cute girl stopped me on the way, so I danced.",
        id : 462
      },
      {
        name : "Hatake Kakashi",
        quote : "Naruto, it's nice that you removed the poison so spiritedly, but you'll bleed to death if you lose any more blood... Seriously...",
        id : 463
      },
      {
        name : "Itachi Uchiha",
        quote : "People live their lives bound by what they accept as correct and true. That's how they define \"reality\". But what does it mean to be \"correct\" or \"true\"? Merely vague concepts... Their \"reality\" may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?",
        id : 464
      },
      {
        name : "Itachi Uchiha",
        quote : "If you want to kill me, despise me, hate me, and live in an unsightly way... Run, and cling to life, and then some day, when you have the same eyes as I do, come before me.",
        id : 465
      },
      {
        name : "Itachi Uchiha",
        quote : "You aren't even worth killing, foolish little brother.",
        id : 466
      },
      {
        name : "Sasuke Uchiha",
        quote : "If you think I'm just a foolish kid ruled by his emotions, that's fine. Following Itachi's path would be childish, the whispering of fools who don't know hatred. If anyone else tries to ridicule the way I live, I'll slaughter everyone they ever cared about. And then maybe they'll understand what it's like to taste... a little of my hatred.",
        id : 467
      },
      {
        name : "Sasuke Uchiha",
        quote : "*Talking to Naruto* Just shut up for once! What the hell do you know about it?! It's not like you ever had a family in the first place! You were on your own right from the beginning, what makes you think you know anything about it?! Huh?! I'm suffering now because I had those ties, how on earth could you possibly understand, what it feels like to lose all that?!",
        id : 468
      },
      {
        name : "Sasuke Uchiha",
        quote : "*Introducing himself to Kakashi, Naruto and Sakura* My name is Sasuke Uchiha. I hate a lot of things, and I don't particularly like anything. What I have is not a dream, because I will make it a reality. I'm going to restore my clan, and kill a certain someone.",
        id : 469
      },
      {
        name : "Sasuke Uchiha",
        quote : "I have long since closed my eyes... My only goal is in the darkness.",
        id : 470
      },
      {
        name : "Naruto Uzumaki",
        quote : "The pain of being alone...is not an easy one to bear. Why is it...that I can understand your pain? But...I already have many people who are important to me now...and I can't let you hurt any of them. Even if I have to kill you!",
        id : 471
      },
      {
        name : "Naruto Uzumaki",
        quote : "I won't run away anymore... I won't go back on my word... That is my ninja way!",
        id : 472
      },
      {
        name : "Sasuke Uchiha",
        quote : "You're such a loser, Naruto.",
        id : 473
      },
      {
        name : "Sasuke Uchiha",
        quote : "Are you alright, crybaby?",
        id : 474
      },
      {
        name : "Sasuke Uchiha",
        quote : "Naruto... I know you're special but, I AM MORE SPECIAL THAN YOU!",
        id : 475
      },
      {
        name : "Deidara",
        quote : "Shut up! I killed Sasuke Uchiha! And you're next, you art-hating sack of wrinkles!",
        id : 476
      },
      {
        name : "Deidara",
        quote : "*Before killing the Suna guards* Look at those fools. They have no appreciation for art. You have to feel art. And true art... is an EXPLOSION!",
        id : 477
      },
      {
        name : "Deidara",
        quote : "Art is a BANG!",
        id : 478
      },
      {
        name : "Hidan",
        quote : "Kakuzu... Could you get me my body, pleeease?",
        id : 479
      },
      {
        name : "Sakura Haruno",
        quote : "Inu pig!",
        id : 480
      },
      {
        name : "Nara Shikamaru",
        quote : "Man... What a drag...",
        id : 481
      },
      {
        name : "Hatake Kakashi",
        quote : "I'm telling you this because you don't get it. You think you get it, which is not the same as actually getting it. Get it?",
        id : 482
      },
      {
        name : "Nara Shikamaru",
        quote : "How troublesome...",
        id : 483
      },
      {
        name : "Naruto Uzumaki",
        quote : "A true hero always arrives late.",
        id : 484
      },
      {
        name : "Naruto Uzumaki",
        quote : "If he rips my arms off, I'll kick him to death.\nIf he rips my legs off, I'll bite him to death!\nIf he rips my head off, I'll stare him to death!\nAnd if he gouges out my eyes, I'll curse him\nfrom beyond the grave..!",
        id : 485
      },
      {
        name : "Naruto Uzumaki",
        quote : "I am strong because I have people to protect.",
        id : 486
      },
      {
        name : "Itachi Uchiha",
        quote : "Foolish brother, if you wish to kill me - hate me, detest me, and survive in an unsightly way. Run... run and cling to life.",
        id : 487
      },
      {
        name : "Obito Uchiha",
        quote : "In the ninja world, those who don't follow the rules are trash. But, those who abandon their friends are even worse than trash.",
        id : 488
      },
      {
        name : "Naruto Uzumaki",
        quote : "And my dream is to be the greatest Hokage! That way, people will stop disrespecting me and start treating me like I'm somebody. Someone important!",
        id : 489
      },
      {
        name : "Haku",
        quote : "When people are protecting something truly precious to them. They truly can become...as strong as they need to be!",
        id : 490
      },
      {
        name : "Gaara",
        quote : "Not enough... blood.",
        id : 491
      },
      {
        name : "Naruto Uzumaki",
        quote : "BELIEVE IT!!",
        id : 492
      },
      {
        name : "Gaara",
        quote : "I want to be needed, this is what I've learned from meeting and fighting Uzumaki Naruto.",
        id : 493
      },
      {
        name : "Rock Lee",
        quote : "A dropout will beat a genius through hard work.",
        id : 494
      },
      {
        name : "Madara Uchiha",
        quote : "Love is not necessary, power is the only true necessity.",
        id : 495
      },
      {
        name : "Itachi Uchiha",
        quote : "I actually don't think something like perfection exists. That is I think why we are born able to absorb things... and by comparing ourselves with something else we can finally head in a good direction.",
        id : 496
      },
      {
        name : "Hagoromo ??tsutsuki",
        quote : "The past does not exist to remind us that the future cannot be changed. It exists to remind us what the future can be.",
        id : 497
      },
      {
        name : "Naruto Uzumaki",
        quote : "There is no telling what kind of pain will come  after me, but... if I stop believing because of that, if the hero should change, it'll turn into another story from the one my master left behind. Then it wont be Naruto! I can't write novels like my master did. That's why the sequel has to come from the life I live no matter how great the pain, I'll continue walking because that's who Naruto is!",
        id : 498
      },
      {
        name : "Sai",
        quote : "Even if I force myself to smile. It seems I'm the type of person who ends up being hated.",
        id : 499
      },
      {
        name : "Itachi Uchiha",
        quote : "In this moment, I am euphoric. Not because of any phony Shinobi's blessing. But because, I'm enlightened by my intelligence.",
        id : 500
      },
      {
        name : "Itachi Uchiha",
        quote : "Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.",
        id : 501
      },
      {
        name : "Pain",
        quote : "Learn to embrace the fear of feeling about what it's like to contemplate what it is to know true pain. Because when I had nothing and no one - I always had Pain.",
        id : 502
      },
      {
        name : "Sasuke Uchiha",
        quote : "(About Sakura) Was she having fun in her little make-believe fantasy of true love? As for me, I have absolutely no reason to love her and likewise, I can see no reason why she would love me.",
        id : 503
      },
      {
        name : "Madara Uchiha",
        quote : "The longer you live... The more you realize that reality is just made of pain, suffering and emptiness...",
        id : 504
      },
      {
        name : "Madara Uchiha",
        quote : "It seems that you still want to dance but... You will not be able to make steps anymore.",
        id : 505
      },
      {
        name : "Madara Uchiha",
        quote : "I'd be lying if I said things are going according to my plan... but beggars can't be choosers, right?",
        id : 506
      },
      {
        name : "Madara Uchiha",
        quote : "[Last words to Hashirama] As comrades, huh... well... if that's how... we... will.... *smiles*",
        id : 507
      },
      {
        name : "Pain",
        quote : "Feel pain, think about pain, accept pain, know pain... Shinra Tensei!",
        id : 508
      }
    ]
  }
  get Data() {
    return this.quotes
  }
}

module.exports = Database