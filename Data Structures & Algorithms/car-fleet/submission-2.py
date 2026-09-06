class Solution: 
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        # Step 1: pair each car with its time to reach the target
        cars = sorted(zip(position, speed), reverse=True)  # closest to target first

        stack = []  # each entry = the arrival time of a fleet

        for pos, spd in cars:
            time = (target - pos) / spd
            # if this car is slower than the fleet currently in front (top of stack),
            # it can't catch up — it's a brand new fleet, push its time
            if not stack or time > stack[-1]:
                stack.append(time)
            # else: it would catch the fleet ahead before the target,
            # so it merges — do nothing, its time is irrelevant now

        return len(stack)