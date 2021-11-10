window.onload = () => {
    const list = document.getElementById("shuffleAndSort");
    const buttonShuffle = document.getElementById("shuffle");
    const buttonSort = document.getElementById("sort");

    const actionManager = {
        shuffle: (items) => {
            const cached = items.slice(0);
            let i = cached.length
            let temp;
            let random;
            while (--i) {
                random = Math.floor(i * Math.random());
                temp = cached[random];
                cached[random] = cached[i];
                cached[i] = temp;
            }
            return cached;
        },
        sort:(items) => {
            const cached = items.slice(0);
            const temp = [];
            for(let i = 1; i <= cached.length; i++) {
                temp[i-1] = cached.find(c => c && c.innerText == i);
            }
            return temp;
        }
    };

    const aligner = (action) => {
        let nodes = list.children;
        let i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = actionManager[action](nodes);
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    };
    
    buttonShuffle.onclick = () => aligner('shuffle');
    buttonSort.onclick = () => aligner('sort');

}