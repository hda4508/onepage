// src/data/writerData.js
import cho1 from "../img/cho1.jpg";
import cho2 from "../img/cho2.jpg";
import cho3 from "../img/cho3.jpg";
import cho4 from "../img/cho4.jpg";
import cho5 from "../img/cho5.jpg";
import cho6 from "../img/cho6.jpg";
import Book1 from "../img/Book1.jpg";
import Kim1 from "../img/Kim1.jpg";
import Kim2 from "../img/Kim2.jpg";
import Kim3 from "../img/Kim3.jpg";
import Han1 from "../img/Library7.jpg";
import Han2 from "../img/Library3.jpg";
import Han3 from "../img/Han3.jpg";
import Han4 from "../img/Han4.jpg";
import Han5 from "../img/Han5.jpg";
import jung1 from "../img/Library5.jpg";
import jung2 from "../img/jung2.jpg";
import jung3 from "../img/jung3.jpg";
import jung4 from "../img/jung4.jpg";
import jung5 from "../img/jung5.jpg";
import jung6 from "../img/jung6.jpg";
import lee1 from "../img/lee1.jpg";
import yang1 from "../img/Library4.jpg";
import yang2 from "../img/yang2.jpg";
import yang3 from "../img/yang3.jpg";
import cha1 from "../img/genres2.jpg";
import choi1 from "../img/choi1.jpg";
import choi2 from "../img/choi2.jpg";
import choi3 from "../img/choi3.jpg";

export const writerDetails = {
    cho: {
        name: "조예은",
        books: [
          {
            title: "트로피컬 나이트",
            publisher: "한겨레출판",
            desc: "뜨거운 여름밤의 열기와 감정을 담은 소설",
            quote: "“열대야의 끝에서, 우리는 서로를 발견했다.”",
            image: cho1
        },
        {
          title: "칵테일, 러브, 좀비",
          publisher: "안전가옥",
          desc: "사랑과 좀비를 소재로 한 단편집",
          quote: "“사랑은 좀비처럼, 죽어도 살아있다.”",
          image: cho2
        },
        {
          title: "스노볼 드라이브",
          publisher: "민음사",
          desc: "눈 내리는 도시에서의 로맨틱한 이야기",
          quote: "“다 망했으면 좋겠다. 진짜 다 망했으면.”",
          image: cho3
        },
        {
          title: "입속 지느러미",
          publisher: "한겨레출판",
          desc: "인어가 등장하는 환상소설",
          quote: "“나는 그를 노래처럼 삼켰다.”",
          image: cho4
        },
        {
          title: "테디베어는 죽지 않아",
          publisher: "안전가옥",
          desc: "인형과 살인이 얽힌 미스터리",
          quote: "“넌 아무 말도 안 해도 모든 걸 알고 있잖아.”",
          image: cho5
        },
        {
          title: "뉴서울파크 젤리장수 대학살",
          publisher: "안전가옥",
          desc: "귀엽지만 잔혹한 디스토피아",
          quote: "“달콤한 건 금방 썩는다.”",
          image: cho6
        }
      ]
    },
    park: {
      name: "박서연",
      books: [
        {
          title: "수키와 니니",
          publisher: "문학과지성사",
          desc: "서로를 통과해간 두 소녀의 이야기",
          quote:
            "“단 한 가지 확신할 수 있었던 건 그 순간 내 인생의 흐름이 바뀌었고, 그렇게 만든 저 사람을 영원히 잊지 못하리라는 것뿐이었다.”",
            image: Book1
        }
      ]
    },
    han: {
      name: "한강",
      books: [
        {
          title: "채식주의자",
          publisher: "창비",
          desc: "육식의 거부로부터 시작된 인간성과 폭력성의 문제",
          quote: "“나는 이제 아무것도 먹지 않아요.”",
          image: Han1
        },
        {
          title: "소년이 온다",
          publisher: "창비",
          desc: "1980년 광주를 배경으로 한 역사적 고백",
          quote: "“네가 죽은 뒤에도 너의 목소리는 살아 있다.”",
          image: Han2
        },
        {
            title: "작별하지 않는다",
            publisher: "문학동네",
            desc: "제주 4·3 사건의 상처를 안고 살아가는 이들의 기억과 애도",
            quote: "“우리는 작별하지 않았다. 아직도.”",
            image: Han3
        },
        {
            title: "흰",
            publisher: "문학동네",
            desc: "‘흰색’을 매개로 상실과 감각을 이야기하는 산문과 소설의 경계에 선 책",
            quote: "“흰 것은 모든 색을 품고 있다.”",
            image: Han4
        },
        {
            title: "희랍어 시간",
            publisher: "문학동네",
            desc: "언어를 잃고 존재의 경계에 선 인물의 이야기를 통해 말과 상실을 그린 작품",
            quote: "“말할 수 없는 것을 말하려는 시간.”",
            image: Han5
        }
      ]
    },
    jung: {
      name: "정대건",
      books: [
        {
          title: "급류",
          publisher: "창비",
          desc: "청춘의 상처와 우정을 그려낸 감성 청년소설",
          quote: "“급류에 휩쓸려도, 나는 너를 기억할 거야.”",
          image: jung1
        },
        {
            title: "GV 빌런 고태경",
            publisher: "은행나무",
            desc: "독립영화 감독과 관객의 관계를 그린 소설",
            quote: "“관객과의 대화는 때로 영화보다 더 영화 같았다.”",
            image: jung2
          },
          {
            title: "아이 틴더 유",
            publisher: "자음과모음",
            desc: "현대인의 연애와 관계를 탐구한 단편집",
            quote: "“스와이프 한 번에 시작된 우리의 이야기.”",
            image: jung3
          },
          {
            title: "부오니시모, 나폴리",
            publisher: "위즈덤하우스",
            desc: "이탈리아 나폴리를 배경으로 한 사랑 이야기",
            quote: "“나폴리의 햇살 아래, 사랑은 더욱 뜨거웠다.”",
            image: jung4
          },
          {
            title: "나의 파란, 나폴리",
            publisher: "안온북스",
            desc: "나폴리에서의 삶과 감정을 담은 에세이",
            quote: "“파란 바다처럼 깊고 넓은 나의 나폴리.”",
            image: jung5
          },
          {
            title: "혹시 MBTI가 어떻게 되세요?",
            publisher: "읻다",
            desc: "MBTI를 주제로 한 앤솔러지 소설집",
            quote: "“성격 유형이 달라도, 마음은 통할 수 있다.”",
            image: jung6
          },
      ]
    },
    yang: {
      name: "양귀자",
      books: [
        {
            title: "모순",
            publisher: "쓰다",
            desc: "삶의 이중성과 가족 간의 갈등을 다룬 성장소설",
            quote: "“나는 모순 덩어리였다.”",
            image: yang1
          },
          {
            title: "원미동 사람들",
            publisher: "쓰다",
            desc: "1980년대 소시민들의 삶을 섬세하게 그린 단편집",
            quote: "“원미동 골목마다 삶의 이야기가 흐르고 있었다.”",
            image: yang2
          },
          {
            title: "숨은 꽃",
            publisher: "쓰다",
            desc: "외면받는 여성들의 삶을 응시한 단편소설집",
            quote: "“그녀는 자신도 모르게 피어 있었다.”",
            image: yang3
          }
      ]
    },
    kim: {
        name: "김청귤",
        books: [
          {
            title: "재와 물거품",
            publisher: "위즈덤하우스",
            desc: "잿빛 감정들과 소멸에 대한 사유",
            quote: "“끝났다는 사실이 끝까지 따라왔다.”",
            image: Kim1
          },
          {
            title: "이 망할 세계에서 우리는",
            publisher: "나무옆의자",
            desc: "소수자의 감정과 현실을 섬세하게 그려낸 환상적인 장편소설",
            quote: "“물거품 속에서 기다려왔어.”",
            image: Kim2
          },
          {
            title: "초코 좀비",
            publisher: "문학동네",
            desc: "현실과 판타지를 넘나드는, 청소년을 위한 다정하고 통통 튀는 좀비 성장소설",
            quote: "“달콤한 걸 먹으면 조금은 나아지는 것 같았다.”",
            image: Kim3
          }
        ]
      },      
    lee: {
      name: "이옥토",
      books: [
        {
            title: "처음 본 새를 만났을 때처럼",
            publisher: "달",
            desc: "존재의 무해함을 탐구하는 산문집",
            quote: "“나는 조용히 안쪽으로 걷는 중이다.”",
            image: lee1
          }
      ]
    },
    cha: {
      name: "차정은",
      books: [
        {
          title: "토마토 컵라면",
          publisher: "BOOKK",
          desc: "소소한 감정들을 담은 청춘 에세이",
          quote: "“사랑은 여름의 햇살처럼 따뜻한 감정이었다.”",
          image: cha1
        }
      ]
    },
    choi: {
      name: "최진영",
      books: [
        {
            title: "구의 증명",
            publisher: "은행나무",
            desc: "삶과 죽음, 상실과 사랑의 경계에서 인간 존재의 의미를 탐구하는 소설",
            quote: "“네가 울 수 있는 데까지 같이 울어줄게.”",
            image: choi1
          },
          {
            title: "해가 지는 곳으로",
            publisher: "한겨레출판",
            desc: "삶에 지친 이들에게 전하는 따뜻한 위로와 연대의 이야기",
            quote: "“세상은 여전히 무너지고 있지만, 나는 너를 기억할 거야.”",
            image: choi2
          },
          {
            title: "겨울방학",
            publisher: "창비",
            desc: "우정과 상처, 성장의 과정을 그린 섬세한 청춘소설",
            quote: "“그 겨울, 우리는 서로의 눈을 바라보았다.”",
            image: choi3
          }
      ]
    }
  };