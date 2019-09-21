from nn import NeuralNetwork as nn
# import playlist as pl
import sys


def main():
    # playlist generating neural network
#    pg = nn()
    # playlist training neural network
#    tn = nn()

    f = open('python-log', 'w+')
    f.write('in python main\n')
    # f.write('{}\n'.format(len(sys.argv)))
    if len(sys.argv) != 0:
        for i in sys.argv:
            f.write('{}\n'.format(i))
    # f.write('\n')


    f.close()
    pass #end main

if __name__ == '__main__':
    print main()
