export const effects = [
  {
    id: 1,
    jp_name: "\u53cb\u60c5\u30dc\u30fc\u30ca\u30b9",
    en_name: "Friendship Bonus",
    jp_desc:
      "\u53cb\u60c5\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u767a\u751f\u306b\u3088\u308b\u52b9\u679c\u30a2\u30c3\u30d7",
    en_desc: "Increases stats gained from friendship training",
    symbol: "percent",
    calc: "mult",
    name_ko: "\uc6b0\uc815 \ubcf4\ub108\uc2a4",
    desc_ko:
      "\uc6b0\uc815 \ud2b8\ub808\uc774\ub2dd \ubc1c\uc0dd\uc5d0 \ub530\ub978 \ud6a8\uacfc \uc99d\uac00",
    name_tw: "\u53cb\u60c5\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u767c\u751f\u53cb\u60c5\u8a13\u7df4\u6240\u5e36\u4f86\u7684\u6548\u679c",
  },
  {
    id: 2,
    jp_name: "\u3084\u308b\u6c17\u52b9\u679c\u30a2\u30c3\u30d7",
    en_name: "Motivation Bonus",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u3057\u305f\u3068\u304d\u306e\u3084\u308b\u6c17\u306b\u3088\u308b\u52b9\u679c\u30a2\u30c3\u30d7",
    en_desc: "Increases motivation stat bonus when training together",
    symbol: "percent",
    name_ko: "\ucee8\ub514\uc158 \ud6a8\uacfc \uc99d\uac00",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\uc744 \ud588\uc744 \ub54c \ucee8\ub514\uc158\uc5d0 \ub530\ub978 \ud6a8\uacfc \uc99d\uac00",
    name_tw: "\u5e79\u52c1\u6548\u679c\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u4e00\u8d77\u8a13\u7df4\u5f8c\u5e79\u52c1\u6240\u5e36\u4f86\u7684\u6548\u679c",
  },
  {
    id: 3,
    jp_name: "\u30b9\u30d4\u30fc\u30c9\u30dc\u30fc\u30ca\u30b9",
    en_name: "Speed Bonus",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u3059\u308b\u3068\u30b9\u30d4\u30fc\u30c9\u306e\u4e0a\u6607\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases the amount of speed gain when training together",
    symbol: "none",
    name_ko: "\uc2a4\ud53c\ub4dc \ubcf4\ub108\uc2a4",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\uc744 \ud558\uba74 \uc2a4\ud53c\ub4dc \uc0c1\uc2b9\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u901f\u5ea6\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u4e00\u8d77\u8a13\u7df4\u6642\u901f\u5ea6\u7684\u4e0a\u5347\u91cf",
  },
  {
    id: 4,
    jp_name: "\u30b9\u30bf\u30df\u30ca\u30dc\u30fc\u30ca\u30b9",
    en_name: "Stamina Bonus",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u3059\u308b\u3068\u30b9\u30bf\u30df\u30ca\u306e\u4e0a\u6607\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases the amount of stamina gain when training together",
    symbol: "none",
    name_ko: "\uc2a4\ud0dc\ubbf8\ub098 \ubcf4\ub108\uc2a4",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\uc744 \ud558\uba74 \uc2a4\ud0dc\ubbf8\ub098 \uc0c1\uc2b9\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u6301\u4e45\u529b\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u4e00\u8d77\u8a13\u7df4\u6642\u6301\u4e45\u529b\u7684\u4e0a\u5347\u91cf",
  },
  {
    id: 5,
    jp_name: "\u30d1\u30ef\u30fc\u30dc\u30fc\u30ca\u30b9",
    en_name: "Power Bonus",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u3059\u308b\u3068\u30d1\u30ef\u30fc\u306e\u4e0a\u6607\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases the amount of power gain when training together",
    symbol: "none",
    name_ko: "\ud30c\uc6cc \ubcf4\ub108\uc2a4",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\uc744 \ud558\uba74 \ud30c\uc6cc \uc0c1\uc2b9\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u529b\u91cf\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u4e00\u8d77\u8a13\u7df4\u6642\u529b\u91cf\u7684\u4e0a\u5347\u91cf",
  },
  {
    id: 6,
    jp_name: "\u6839\u6027\u30dc\u30fc\u30ca\u30b9",
    en_name: "Guts Bonus",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u3059\u308b\u3068\u6839\u6027\u306e\u4e0a\u6607\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases the amount of guts gain when training together",
    symbol: "none",
    name_ko: "\uadfc\uc131 \ubcf4\ub108\uc2a4",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\uc744 \ud558\uba74 \uadfc\uc131 \uc0c1\uc2b9\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u610f\u5fd7\u529b\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u4e00\u8d77\u8a13\u7df4\u6642\u610f\u5fd7\u529b\u7684\u4e0a\u5347\u91cf",
  },
  {
    id: 7,
    jp_name: "\u8ce2\u3055\u30dc\u30fc\u30ca\u30b9",
    en_name: "Wisdom Bonus",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u3059\u308b\u3068\u8ce2\u3055\u306e\u4e0a\u6607\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases the amount of wisdom gain when training together",
    symbol: "none",
    name_ko: "\uc9c0\ub2a5 \ubcf4\ub108\uc2a4",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\uc744 \ud558\uba74 \uc9c0\ub2a5 \uc0c1\uc2b9\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u667a\u529b\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u4e00\u8d77\u8a13\u7df4\u6642\u667a\u529b\u7684\u4e0a\u5347\u91cf",
  },
  {
    id: 8,
    jp_name:
      "\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u52b9\u679c\u30a2\u30c3\u30d7",
    en_name: "Increased Training",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3057\u305f\u3068\u304d\u306e\u52b9\u679c\u30a2\u30c3\u30d7",
    en_desc: "Increases stat gains when training together",
    symbol: "percent",
    name_ko: "\ud2b8\ub808\uc774\ub2dd \ud6a8\uacfc \uc99d\uac00",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\ud588\uc744 \ub54c \ud6a8\uacfc \uc99d\uac00",
    name_tw: "\u8a13\u7df4\u6548\u679c\u63d0\u5347",
    desc_tw: "\u63d0\u5347\u4e00\u8d77\u8a13\u7df4\u5f8c\u7684\u6548\u679c",
  },
  {
    id: 9,
    jp_name: "\u521d\u671f\u30b9\u30d4\u30fc\u30c9\u30a2\u30c3\u30d7",
    en_name: "Initial Speed Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u521d\u671f\u30b9\u30d4\u30fc\u30c9\u304c\u30a2\u30c3\u30d7",
    en_desc: "Initial speed at the start of training is increased",
    symbol: "none",
    name_ko: "\ucd08\uae30 \uc2a4\ud53c\ub4dc \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \ucd08\uae30 \uc2a4\ud53c\ub4dc\uac00 \uc99d\uac00",
    name_tw: "\u521d\u671f\u901f\u5ea6\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u521d\u671f\u901f\u5ea6",
  },
  {
    id: 10,
    jp_name: "\u521d\u671f\u30b9\u30bf\u30df\u30ca\u30a2\u30c3\u30d7",
    en_name: "Initial Stamina Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u521d\u671f\u30b9\u30bf\u30df\u30ca\u304c\u30a2\u30c3\u30d7",
    en_desc: "Initial stamina at the start of training is increased",
    symbol: "none",
    name_ko: "\ucd08\uae30 \uc2a4\ud0dc\ubbf8\ub098 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \ucd08\uae30 \uc2a4\ud0dc\ubbf8\ub098\uac00 \uc99d\uac00",
    name_tw: "\u521d\u671f\u6301\u4e45\u529b\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u521d\u671f\u6301\u4e45\u529b",
  },
  {
    id: 11,
    jp_name: "\u521d\u671f\u30d1\u30ef\u30fc\u30a2\u30c3\u30d7",
    en_name: "Initial Power Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u521d\u671f\u30d1\u30ef\u30fc\u304c\u30a2\u30c3\u30d7",
    en_desc: "Initial power at the start of training is increased",
    symbol: "none",
    name_ko: "\ucd08\uae30 \ud30c\uc6cc \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \ucd08\uae30 \ud30c\uc6cc\uac00 \uc99d\uac00",
    name_tw: "\u521d\u671f\u529b\u91cf\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u521d\u671f\u529b\u91cf",
  },
  {
    id: 12,
    jp_name: "\u521d\u671f\u6839\u6027\u30a2\u30c3\u30d7",
    en_name: "Initial Guts Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u521d\u671f\u6839\u6027\u304c\u30a2\u30c3\u30d7",
    en_desc: "Initial guts at the start of training is increased",
    symbol: "none",
    name_ko: "\ucd08\uae30 \uadfc\uc131 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \ucd08\uae30 \uadfc\uc131\uc774 \uc99d\uac00",
    name_tw: "\u521d\u671f\u610f\u5fd7\u529b\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u521d\u671f\u610f\u5fd7\u529b",
  },
  {
    id: 13,
    jp_name: "\u521d\u671f\u8ce2\u3055\u30a2\u30c3\u30d7",
    en_name: "Initial Wisdom Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u521d\u671f\u8ce2\u3055\u304c\u30a2\u30c3\u30d7",
    en_desc: "Initial wisdom at the start of training is increased",
    symbol: "none",
    name_ko: "\ucd08\uae30 \uc9c0\ub2a5 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \ucd08\uae30 \uc9c0\ub2a5\uc774 \uc99d\uac00",
    name_tw: "\u521d\u671f\u667a\u529b\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u521d\u671f\u667a\u529b",
  },
  {
    id: 14,
    jp_name: "\u521d\u671f\u7d46\u30b2\u30fc\u30b8\u30a2\u30c3\u30d7",
    en_name: "Starting Bond Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u521d\u671f\u7d46\u30b2\u30fc\u30b8\u304c\u30a2\u30c3\u30d7",
    en_desc: "Initial bond gauge at the start of training is increased",
    symbol: "none",
    name_ko: "\ucd08\uae30 \uc6b0\uc815\ub3c4 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \ucd08\uae30 \uc6b0\uc815\ub3c4\uac00 \uc99d\uac00",
    name_tw: "\u521d\u671f\u60c5\u8abc\u91cf\u689d\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u521d\u671f\u60c5\u8abc\u91cf\u689d",
  },
  {
    id: 15,
    jp_name: "\u30ec\u30fc\u30b9\u30dc\u30fc\u30ca\u30b9",
    en_name: "Race Bonus",
    jp_desc:
      "\u30ec\u30fc\u30b9\u306b\u51fa\u8d70\u3057\u305f\u7d50\u679c\u3067\u5f97\u3089\u308c\u308b\u30b9\u30c6\u30fc\u30bf\u30b9\u306e\u4e0a\u6607\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases stat and skill point gains after finishing a race",
    symbol: "percent",
    name_ko: "\ub808\uc774\uc2a4 \ubcf4\ub108\uc2a4",
    desc_ko:
      "\ub808\uc774\uc2a4 \ucd9c\uc804 \uacb0\uacfc\uc5d0 \ub530\ub77c \uc5bb\ub294 \uc2a4\ud14c\uc774\ud130\uc2a4 \uc0c1\uc2b9\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u7af6\u8cfd\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u53c3\u52a0\u7af6\u8cfd\u5f8c\u4f9d\u7167\u7d50\u679c\u6240\u80fd\u7372\u5f97\u7684\u80fd\u529b\u503c\u4e0a\u5347\u91cf",
  },
  {
    id: 16,
    jp_name: "\u30d5\u30a1\u30f3\u6570\u30dc\u30fc\u30ca\u30b9",
    en_name: "Fan Count Bonus",
    jp_desc:
      "\u30ec\u30fc\u30b9\u306b\u51fa\u8d70\u3057\u305f\u7d50\u679c\u3067\u5f97\u3089\u308c\u308b\u30d5\u30a1\u30f3\u306e\u4e0a\u6607\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases fan count increase after finishing a race",
    symbol: "percent",
    name_ko: "\ud32c \uc218 \ubcf4\ub108\uc2a4",
    desc_ko:
      "\ub808\uc774\uc2a4 \ucd9c\uc804 \uacb0\uacfc\uc5d0 \ub530\ub77c \uc5bb\ub294 \ud32c \uc0c1\uc2b9\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u7c89\u7d72\u6578\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u53c3\u52a0\u7af6\u8cfd\u5f8c\u4f9d\u7167\u7d50\u679c\u6240\u80fd\u7372\u5f97\u7684\u7c89\u7d72\u4e0a\u5347\u91cf",
  },
  {
    id: 17,
    jp_name: "\u30d2\u30f3\u30c8Lv\u30a2\u30c3\u30d7",
    en_name: "Hint Lv. Bonus",
    jp_desc:
      "\u30d2\u30f3\u30c8\u30a4\u30d9\u30f3\u30c8\u3067\u5f97\u3089\u308c\u308b\u30d2\u30f3\u30c8Lv\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases hint level from events of this card",
    symbol: "level",
    name_ko: "\ud78c\ud2b8 Lv \uc99d\uac00",
    desc_ko:
      "\ud78c\ud2b8 \uc774\ubca4\ud2b8\uc5d0\uc11c \uc5bb\uc744 \uc218 \uc788\ub294 \ud78c\ud2b8 Lv\uc774 \uc99d\uac00",
    name_tw: "\u9748\u611fLv\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u5728\u9748\u611f\u4e8b\u4ef6\u6240\u80fd\u7372\u5f97\u7684\u9748\u611fLv",
  },
  {
    id: 18,
    jp_name: "\u30d2\u30f3\u30c8\u767a\u751f\u7387\u30a2\u30c3\u30d7",
    en_name: "Hint Rate Up",
    jp_desc:
      "\u30d2\u30f3\u30c8\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3059\u308b\u78ba\u7387\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases probability of getting hints",
    symbol: "percent",
    name_ko: "\ud78c\ud2b8 \ubc1c\uc0dd\ub960 \uc99d\uac00",
    desc_ko:
      "\ud78c\ud2b8 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ud655\ub960\uc774 \uc99d\uac00",
    name_tw: "\u9748\u611f\u767c\u751f\u7387\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u9748\u611f\u4e8b\u4ef6\u7684\u767c\u751f\u6a5f\u7387",
  },
  {
    id: 19,
    jp_name: "\u5f97\u610f\u7387\u30a2\u30c3\u30d7",
    en_name: "Specialty Rate Up",
    jp_desc:
      "\u5f97\u610f\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u306b\u914d\u7f6e\u3055\u308c\u308b\u78ba\u7387\u304c\u30a2\u30c3\u30d7",
    en_desc:
      "Increases probability of getting assigned to specialty training category",
    symbol: "none",
    calc: "mult",
    name_ko: "\ud2b9\uae30\uc728 \uc99d\uac00",
    desc_ko:
      "\ud2b9\uae30 \ud2b8\ub808\uc774\ub2dd\uc5d0 \ubc30\uce58\ub420 \ud655\ub960\uc774 \uc99d\uac00",
    name_tw: "\u64c5\u9577\u7387\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u88ab\u914d\u7f6e\u5728\u64c5\u9577\u8a13\u7df4\u7684\u6a5f\u7387",
  },
  {
    id: 20,
    jp_name: "\u30b9\u30d4\u30fc\u30c9\u9650\u754c\u5024\u30a2\u30c3\u30d7",
    en_name: "Speed Limit Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u30b9\u30d4\u30fc\u30c9\u4e0a\u9650\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases upper limit of speed at the start of the training",
    symbol: "none",
    inactive: true,
    name_ko: "\uc2a4\ud53c\ub4dc \ud55c\uacc4\uce58 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \uc2a4\ud53c\ub4dc \uc0c1\ud55c\uc774 \uc99d\uac00",
    name_tw: "\u901f\u5ea6\u754c\u9650\u503c\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u901f\u5ea6\u4e0a\u9650",
  },
  {
    id: 21,
    jp_name: "\u30b9\u30bf\u30df\u30ca\u9650\u754c\u5024\u30a2\u30c3\u30d7",
    en_name: "Stamina Limit Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u30b9\u30bf\u30df\u30ca\u4e0a\u9650\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases upper limit of stamina at the start of the training",
    symbol: "none",
    inactive: true,
    name_ko: "\uc2a4\ud0dc\ubbf8\ub098 \ud55c\uacc4\uce58 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \uc2a4\ud0dc\ubbf8\ub098 \uc0c1\ud55c\uc774 \uc99d\uac00",
    name_tw: "\u6301\u4e45\u529b\u754c\u9650\u503c\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u6301\u4e45\u529b\u4e0a\u9650",
  },
  {
    id: 22,
    jp_name: "\u30d1\u30ef\u30fc\u9650\u754c\u5024\u30a2\u30c3\u30d7",
    en_name: "Power Limit Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u30d1\u30ef\u30fc\u4e0a\u9650\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases upper limit of power at the start of the training",
    symbol: "none",
    inactive: true,
    name_ko: "\ud30c\uc6cc \ud55c\uacc4\uce58 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \ud30c\uc6cc \uc0c1\ud55c\uc774 \uc99d\uac00",
    name_tw: "\u529b\u91cf\u754c\u9650\u503c\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u529b\u91cf\u4e0a\u9650",
  },
  {
    id: 23,
    jp_name: "\u6839\u6027\u9650\u754c\u5024\u30a2\u30c3\u30d7",
    en_name: "Guts Limit Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u6839\u6027\u4e0a\u9650\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases upper limit of guts at the start of the training",
    symbol: "none",
    inactive: true,
    name_ko: "\uadfc\uc131 \ud55c\uacc4\uce58 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \uadfc\uc131 \uc0c1\ud55c\uc774 \uc99d\uac00",
    name_tw: "\u610f\u5fd7\u529b\u754c\u9650\u503c\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u610f\u5fd7\u529b\u4e0a\u9650",
  },
  {
    id: 24,
    jp_name: "\u8ce2\u3055\u9650\u754c\u5024\u30a2\u30c3\u30d7",
    en_name: "Intelligence Limit Up",
    jp_desc:
      "\u80b2\u6210\u958b\u59cb\u6642\u306e\u8ce2\u3055\u4e0a\u9650\u304c\u30a2\u30c3\u30d7",
    en_desc:
      "Increases upper limit of intelligence at the start of the training",
    symbol: "none",
    inactive: true,
    name_ko: "\uc9c0\ub2a5 \ud55c\uacc4\uce58 \uc99d\uac00",
    desc_ko:
      "\uc721\uc131 \uac1c\uc2dc \uc2dc \uc9c0\ub2a5 \uc0c1\ud55c\uc774 \uc99d\uac00",
    name_tw: "\u667a\u529b\u754c\u9650\u503c\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u958b\u59cb\u57f9\u80b2\u6642\u7684\u667a\u529b\u4e0a\u9650",
  },
  {
    id: 25,
    jp_name: "\u30a4\u30d9\u30f3\u30c8\u56de\u5fa9\u91cf\u30a2\u30c3\u30d7",
    en_name: "Event Recovery Amount Up",
    jp_desc:
      "\u3053\u306e\u30b5\u30dd\u30fc\u30c8\u30ab\u30fc\u30c9\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u3088\u308b\u56de\u5fa9\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases amount of energy recovery from events of this card",
    symbol: "percent",
    name_ko: "\uc774\ubca4\ud2b8 \ud68c\ubcf5\ub7c9 \uc99d\uac00",
    desc_ko:
      "\uc774 \uc11c\ud3ec\ud2b8 \uce74\ub4dc\uc758 \uc774\ubca4\ud2b8\uc5d0 \ub530\ub978 \ud68c\ubcf5\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u4e8b\u4ef6\u56de\u5fa9\u91cf\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u9019\u5f35\u652f\u63f4\u5361\u7247\u7684\u4e8b\u4ef6\u6240\u5e36\u4f86\u7684\u56de\u5fa9\u91cf",
  },
  {
    id: 26,
    jp_name: "\u30a4\u30d9\u30f3\u30c8\u52b9\u679c\u30a2\u30c3\u30d7",
    en_name: "Event Effect Up",
    jp_desc:
      "\u3053\u306e\u30b5\u30dd\u30fc\u30c8\u30ab\u30fc\u30c9\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u3088\u308b\u52b9\u679c\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases 'effect size' from events of this card",
    symbol: "percent",
    name_ko: "\uc774\ubca4\ud2b8 \ud6a8\uacfc \uc99d\uac00",
    desc_ko:
      "\uc774 \uc11c\ud3ec\ud2b8 \uce74\ub4dc\uc758 \uc774\ubca4\ud2b8\uc5d0 \ub530\ub978 \ud6a8\uacfc\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u4e8b\u4ef6\u6548\u679c\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u9019\u5f35\u652f\u63f4\u5361\u7247\u7684\u4e8b\u4ef6\u6240\u5e36\u4f86\u7684\u6548\u679c\u91cf",
  },
  {
    id: 27,
    jp_name: "\u5931\u6557\u7387\u30c0\u30a6\u30f3",
    en_name: "Failure Rate Down",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3059\u308b\u3068\u5931\u6557\u3059\u308b\u78ba\u7387\u304c\u30c0\u30a6\u30f3",
    en_desc: "Decreases failure rate when training together",
    symbol: "percent",
    calc: "mult",
    name_ko: "\uc2e4\ud328\uc728 \uac10\uc18c",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\ud558\uba74 \uc2e4\ud328\ud560 \ud655\ub960\uc774 \uac10\uc18c",
    name_tw: "\u5931\u6557\u7387\u4e0b\u964d",
    desc_tw:
      "\u964d\u4f4e\u4e00\u8d77\u8a13\u7df4\u6642\u7684\u5931\u6557\u6a5f\u7387",
  },
  {
    id: 28,
    jp_name: "\u4f53\u529b\u6d88\u8cbb\u30c0\u30a6\u30f3",
    en_name: "Energy Discount",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3059\u308b\u3068\u6d88\u8cbb\u3059\u308b\u4f53\u529b\u91cf\u304c\u30c0\u30a6\u30f3",
    en_desc: "Decreases energy consumption when training together",
    symbol: "percent",
    calc: "mult",
    name_ko: "\uccb4\ub825 \uc18c\ube44\ub7c9 \uac10\uc18c",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\ud558\uba74 \uc18c\ube44\ub418\ub294 \uccb4\ub825\ub7c9\uc774 \uac10\uc18c",
    name_tw: "\u9ad4\u529b\u6d88\u8017\u4e0b\u964d",
    desc_tw:
      "\u964d\u4f4e\u4e00\u8d77\u8a13\u7df4\u6642\u7684\u6d88\u8017\u9ad4\u529b\u91cf",
  },
  {
    id: 29,
    jp_name: "\u30df\u30cb\u30b2\u30fc\u30e0\u52b9\u679c\u30a2\u30c3\u30d7",
    en_name: "Mini Game Effect Up",
    jp_desc:
      "\u30df\u30cb\u30b2\u30fc\u30e0\u3067\u5f97\u3089\u308c\u308b\u52b9\u679c\u91cf\u30a2\u30c3\u30d7",
    en_desc: "Increases 'effect size' in mini games",
    symbol: "percent",
    inactive: true,
    name_ko: "\ubbf8\ub2c8\uac8c\uc784 \ud6a8\uacfc \uc99d\uac00",
    desc_ko:
      "\ubbf8\ub2c8\uac8c\uc784\uc5d0\uc11c \uc5bb\uc744 \uc218 \uc788\ub294 \ud6a8\uacfc\ub7c9 \uc99d\uac00",
    name_tw: "\u5c0f\u904a\u6232\u6548\u679c\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u5728\u5c0f\u904a\u6232\u6240\u80fd\u7372\u5f97\u7684\u6548\u679c\u91cf",
  },
  {
    id: 30,
    jp_name: "\u30b9\u30ad\u30ebPt\u30dc\u30fc\u30ca\u30b9",
    en_name: "Skill Point Bonus",
    jp_desc:
      "\u4e00\u7dd2\u306b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u3059\u308b\u3068\u30b9\u30ad\u30ebPt\u306e\u4e0a\u6607\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases skill point gain when training together",
    symbol: "none",
    name_ko: "\uc2a4\ud0ac Pt \ubcf4\ub108\uc2a4",
    desc_ko:
      "\ud568\uaed8 \ud2b8\ub808\uc774\ub2dd\uc744 \ud558\uba74 \uc2a4\ud0ac Pt\uc758 \uc0c1\uc2b9\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u6280\u80fdPt\u52a0\u6210",
    desc_tw:
      "\u63d0\u5347\u4e00\u8d77\u8a13\u7df4\u6642\u6280\u80fdPt\u7684\u4e0a\u5347\u91cf",
  },
  {
    id: 31,
    jp_name: "\u8ce2\u3055\u53cb\u60c5\u56de\u5fa9\u91cf\u30a2\u30c3\u30d7",
    en_name: "Wisdom Training Recovery Up",
    jp_desc:
      "\u8ce2\u3055\u53cb\u60c5\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u767a\u751f\u306b\u3088\u308b\u56de\u5fa9\u91cf\u304c\u30a2\u30c3\u30d7",
    en_desc: "Increases energy recovery (wisdom training only)",
    symbol: "none",
    name_ko: "\uc9c0\ub2a5 \uc6b0\uc815 \ud68c\ubcf5\ub7c9 \uc99d\uac00",
    desc_ko:
      "\uc9c0\ub2a5 \uc6b0\uc815 \ud2b8\ub808\uc774\ub2dd \ubc1c\uc0dd\uc5d0 \ub530\ub978 \ud68c\ubcf5\ub7c9\uc774 \uc99d\uac00",
    name_tw: "\u667a\u529b\u53cb\u60c5\u56de\u5fa9\u91cf\u63d0\u5347",
    desc_tw:
      "\u63d0\u5347\u667a\u529b\u53cb\u60c5\u8a13\u7df4\u767c\u751f\u6240\u5e36\u4f86\u7684\u56de\u5fa9\u91cf",
  },
];
