#!/usr/bin/python3

"""
this module contains a method that determines if a
given data set represents a valid UTF-8 encoding
"""


def validUTF8(data):

    """
    a method that determines if a given data
    set represents a valid UTF-8 encoding.

    args: data(the data to be processed)
    return: True for a valid utf-8 encoding otherwise false
    """

    try:
        byte_data = bytes(data)
        byte_data.decode('utf-8')
        return True

    except (UnicodeDecodeError, ValueError):
        return False
