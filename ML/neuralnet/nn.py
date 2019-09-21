'''
CONCEPTS BEHIND THE STRUCTURE OF THE NEURAL NETWORK(S):
playlist generating NN:
    -user feedback help back propogation:
        -playing the same playlist will strengthen the relationship between the
            songs of that playlist. So will giving the playlist a 'thumbs up'
        -simple feedback such as a 'thumbs up' or 'thumbs down' will affect the
            relationship between that song and the search emotion or keyword
        -the more you use it the better it gets (how tho...)
        -very popular playlists

song association NN(?):
    -start with a small set of training data, add, and retrain every-so-often
    -gather and utillize user feedback to add to training data:
        * select from pre-set tags (happy, sad, etc.)
        * thumbs-up or down to strengthen/weaken

PROS of using two NNs:
    -faster run times
    -easier(?) associations
    -flexible/dynamic associations
    -fewer weights per NN

playlist generation happens 20 songs(?) at a time and playlist can be as long as
user defines. default is 60(?) songs.

'''

class NeuralNetwork():
    '''     '''
    def __init__(self):
        print 'init NN', __name__
        self.num_inputs = 0     # whats going into the NN
        self.bb_width = 0       # how many hidden layers
    pass #end of init func

    '''     '''
    def sigmoid(self):
        pass
    pass #end of sigmoid func

    '''     '''
    def fPropagation(self):
        pass
    pass #end of fPropagation func

    '''     '''
    def bPropagation(self):
        pass
    pass #end of bPropagation func

    '''     '''
    def train(self):
        pass
    pass #end of train func

pass #end of NeuralNetwork class
