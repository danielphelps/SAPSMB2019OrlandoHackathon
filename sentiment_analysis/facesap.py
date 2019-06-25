#This file allows to perform Emotion detection on frames grabbed from the webcam using OpenCV-Python

import cv2
import sys
from EmoPy.src.fermodel import FERModel
#from pkg_resources import resource_filename

def dothing(b64_bytes):
    #b64_bytes = sys.argv [1]
    b64_string = b64_bytes.decode ()
    im = imread (io.BytesIO (base64.b64decode (b64_string)))
    im = cv2.cvtColor (im, cv2.COLOR_RGB2BGR)


    #Can choose other target emotions from the emotion subset defined in 
    # fermodel.py in src directory. The function 
    #defined as `def _check_emotion_set_is_supported(self):`

    target_emotions = ['calm', 'anger', 'happiness']
    model = FERModel (target_emotions, verbose=True)

    #Capture frame
    file = 'face.jpg'
    cv2.imwrite(file, im)	

    frameString = model.predict(file)

#Display emotion
    output = str(model.predict(file))
    print(output)
    return output



