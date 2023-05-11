#!/bin/bash

# Run the code
npm start &

# Monitor for changes
watchman -- trigger $(pwd) my-action '**/*' -- npm restart
