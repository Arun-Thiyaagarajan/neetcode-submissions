class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        if (s2 === s1) return true;

        let left = 0;
        let counter = new CounterMap();
        for (const char of s1) {
            counter.add(char)
        }
        const counterCopy = counter.clone;

        for (let right = 0; right < s2.length; right++) {
            const char = s2[right];
            
            if (counter.has(char)) {
                left++;
                counter.remove(char);

                if (counter.size === 0) {
                    return true;
                }
            } else if (counter.size !== counterCopy.size) {
                counter = counterCopy.clone;
                right = right - left;
                left = 0;
            }
        }

        return false;
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

        if (count === 1) {
            this.map.delete(value);
        } else {
            this.map.set(value, count - 1);
        }
    }

    has(value: string): boolean {
        return this.map.has(value);
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
