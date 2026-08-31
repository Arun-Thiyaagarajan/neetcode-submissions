class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const counter = new CounterMap();
        let l = 0;
        let longest = 0;

        for (let r = 0; r < s.length; r++) {
            const windowSize = () => r - l + 1;

            counter.add(s[r]);
            if (windowSize() - counter.max() > k) {
                counter.remove(s[l]);
                l++;
            }

            longest = Math.max(longest, windowSize());
        }

        return longest;
    }
}

class CounterMap {
    private map = new Map<string, number>();
    private maxCount = 0;

    add(value: string): void {
        const count = (this.map.get(value) ?? 0) + 1;

        this.map.set(value, count);
        this.maxCount = Math.max(this.maxCount, count);
    }

    remove(value: string): void {
        const count = this.map.get(value);

        if (count === undefined) return;

        if (count === 1) {
            this.map.delete(value);
        } else {
            this.map.set(value, count - 1);
        }
    }

    has(value: string): boolean {
        return this.map.has(value);
    }

    get(value: string): number {
        return this.map.get(value) ?? 0;
    }

    delete(value: string): void {
        this.map.delete(value);
    }

    max(): number {
        return this.maxCount;
    }
}
