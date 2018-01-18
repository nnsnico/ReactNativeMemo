const initialMemoList = [
    {
        key: 'hoge',
        title: 'hogeの神秘',
        detail: 'hogeはすごいよ。とってもすごいんだよ。何よりもhogeしてhohohogegegeするのがすごい。やっぱすげぇわhogeは。ほら、そこの君もhogeのすごさを知ってきただろ？',
    },
    {
        key: 'fuga',
        title: 'fugaの宝具',
        detail: 'fugaの宝具はfuga神によって5000兆年もの間守られ続けてきた神秘の宝である。形状は「fuga」の形をした禍々しい風格を持つ。一度手にしたものはfuga神の呪いによって永遠にふがふが言い続けるであろう',
    },
    {
        key: 'piyo',
        title: '伝説の島piyo島',
        detail: 'piyopiyo!piyopiyopiyo!piyopiyopiyopiyopiyo!pipipipipipiiiiiiii!!!piyopiyopiyooooooooo!!!!!!!!\n二度と日本語がしゃべれなくなるぞ',
    },
]

export default interface Memo {
    key: string,
    title: string,
    detail: string,
}