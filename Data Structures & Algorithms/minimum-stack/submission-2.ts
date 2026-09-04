class MinStack {
    constructor() {}
    output: number[] = [];
    min: number[] = [];
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.output.push(val);
        
        let minVal = val;
        if (this.min.length > 0) {
            minVal = Math.min(minVal, this.min[this.min.length - 1]);
        }
        this.min.push(minVal);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.output.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.output[this.output.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min[this.min.length - 1];
    }
}
