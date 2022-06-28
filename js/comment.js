const quotes = [
    {
        quotes:"인터넷에 올라온 명언들의 문제점은 그것이 진짜인지 알 수 없다는 것이다.",
        author:" - 에이브러햄 링컨"
    },
    {
        quotes:"빵이 없으면 케이크를 먹으면 되지.",
        author:" - 마리 앙투아네트"
    },
    {
        quotes:"일단 유명해져라. 그러면 당신이 똥을 싸도 사람들은 박수를 칠 것이다.",
        author:" - 앤디 워홀"
    },
    {
        quotes:"전쟁에서 2등에게 줄 상은 없다",
        author:" - 오마 브래들리"
    },
    {
        quotes:"지옥을 지나고 있다면.. 계속 가라",
        author:" - 윈스턴 처칠"
    },
    {
        quotes:"모든 이의 삶은 똑같이 끝난다. 중요한 것은 그가 어떻게 살았고 어떻게 죽었는가다.",
        author:" - 어니스트 헤밍웨이"
    },
    {
        quotes:"잘 살아라. 그것이 최고의 복수다.",
        author:" - 탈무드"
    },
    {
        quotes:"내신이 무너져도 솟아날 정시가 있다.",
        author:" - 제롬 보아텡"
    },
    {
        quotes:"단언컨데, 뚜껑은 가장 완벽한 물체입니다.",
        author:" - 팔도 왕뚜껑"
    },
    {
        quotes:"지식은 말하지만, 지혜는 돋는다.",
        author:" - 지미 헨드릭스"
    },
    {
        quotes:"잘 보낸 하루가 편안한 잠을 주듯이 잘 쓰인 일생은 평안한 죽음을 준다.",
        author:" - 레오나르도 다 빈치"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function PaintQuotes()
{
    const RANDOM_INDEX = Math.floor(Math.random()*quotes.length);
    const todaysQuote = quotes[RANDOM_INDEX];

    quote.innerText = todaysQuote.quotes;
    author.innerText = todaysQuote.author;
}
PaintQuotes();
setInterval(PaintQuotes,5000);