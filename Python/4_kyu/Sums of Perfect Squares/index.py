def sum_of_squares(n):
    import math

    # Create a list to store the minimum number of perfect squares for each number up to n
    dp = [float('inf')] * (n + 1)
    dp[0] = 0  # Base case: zero squares sum to zero
    
    # Iterate over each number from 1 to n
    for i in range(1, n + 1):
        # Try every square number j^2 where j^2 <= i
        j = 1
        while j * j <= i:
            dp[i] = min(dp[i], dp[i - j * j] + 1)
            j += 1
    
    return dp[n]