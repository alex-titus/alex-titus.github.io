class Playlist():
    def __init__(self, m = 40):
        self.playlist = []      #
        self.curr_length = 0    # number of songs currently in playlist
        self.max_songs = m
        self.seed = ''          # emotion/genre/song-name (?)
    pass #end init func

    #test code
    def printInfo():
        print 'self.curr_length, self.max_length, self.seed'
        print self.curr_length, self.max_length, self.seed
        print
    pass # end print func
    #end test code

    def genFullPlaylist(max_num_songs = 20):
#        playlist = []
#        for i in range(0, max_num_songs):
            #call new song

            #placeholder code
#            new_song = 'song {}'.format(i)
#            playlist.append(new_song)
            #end placeholder code

            pass #end playlist func
    #need a 'deploy' function?? something to 'launch' the code to the website?

    def addSongs():
        added_songs = []

    pass

pass #end Playlist class

#test code
p = Playlist()
p.genFullPlaylist()
# genFullPlaylist()
#end test code
