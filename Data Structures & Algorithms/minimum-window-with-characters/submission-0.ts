class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let left = 0;
        let bestLen = Infinity;
        let bestStart = 0;
        const need = new CounterMap();
        const window = new CounterMap();
        
        for (const char of t) need.add(char);
        
        const required = need.size;
        let formed = 0;
        
        // 0  1  2  3  4  5  6  7  8  9 10 11 12
        // A  D  O  B  E  C  O  D  E  B  A  N  C
        // { A => 1, B => 1, C => 1}
        for (let right = 0; right < s.length; right++) {
            const rChar = s[right];
            window.add(rChar);
            
            if (need.has(rChar) && window.get(rChar) === need.get(rChar)) {
                formed++;
            }

            const windowSize = () => right - left + 1;

            while (formed === required) {
                if (windowSize() < bestLen) {
                    bestLen = windowSize();
                    bestStart = left;
                }

                const lChar = s[left];
                window.remove(lChar);

                if (need.has(lChar) && window.get(lChar) < need.get(lChar)) {
                    formed--;
                }

                left++;
            }
        }

        return bestLen == Infinity ? "" : s.substring(bestStart, bestLen + bestStart);
    }
}

class CounterMap {
    private map = new Map<string, number>();

    add(value: string): void {
        const count = (this.map.get(value) ?? 0) + 1;

        this.map.set(value, count);
    }

    remove(value: string): void {
        const count = this.map.get(value);

        if (count === undefined) return;

        this.map.set(value, count - 1);
    }

    has(value: string): boolean {
        return this.map.has(value);
    }

    get(value: string): number {
        return this.map.get(value) ?? 0;
    }

    get size(): number {
        return this.map.size;
    }

    get clone(): CounterMap {
        const copy = new CounterMap();
        copy.map = new Map(this.map);
        return copy;
    }
}
