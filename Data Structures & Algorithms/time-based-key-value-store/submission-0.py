class TimeMap:

    def __init__(self):
        self.keyStore = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.keyStore[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        history = self.keyStore.get(key, [])
        lo, hi = 0, len(history) - 1
        result = ''
        
        while lo <= hi:
            mid = (lo + hi) // 2
            mid_time, mid_value = history[mid]
            
            if mid_time <= timestamp:
                result = mid_value
                lo = mid + 1
            else:
                hi = mid - 1

        return result
