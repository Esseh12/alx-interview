#!/usr/bin/python3

"""
This module contains a function that determines the
fewest number of coins needed to meet a given total
"""


def makeChange(coins, total):

    """
    This function returns the fewest number of coins needed
    to meet a given total

    args: coins, total
    return:
    If total is 0 or less, return 0
    If total cannot be met by any number of coins you have, return -1
    """
    if total <= 0:
        return 0

    # Initialize an array to store the min coin for each amount
    # from 0 to total amount
    dp = [float('inf')] * (total + 1)
    dp[0] = 0

    # base case because if total is 0 change would be 0

    # Fill the dp array
    for coin in coins:
        for amount in range(coin, total + 1):
            dp[amount] = min(dp[amount], dp[amount - coin] + 1)

    # If dp[total] is still infinity, that means
    # it's not possible to make the total

    return dp[total] if dp[total] != float('inf') else - 1
