
imageName=sdowsland/bookmarklet-dev
imageExist=$(docker images | grep $imageName | awk '{print $1}')

if [ "$imageExist" != "$imageName" ]
then
    docker build -f docker/dev/Dockerfile -t $imageName .
fi


docker run --rm -it -v ${PWD}:/usr/local/app -w /usr/local/app $imageName bash