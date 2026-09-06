class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = [[p, (target - p) / s] for p, s in zip(position, speed)];
        
        cars.sort(key=lambda x: x[0], reverse=True)

        fleets = 0
        currentFleetTime = -1;
        
        for _, time in cars:
            if time > currentFleetTime:
                fleets += 1;
                currentFleetTime = time;

        return fleets;