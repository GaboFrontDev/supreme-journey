PARAM1=$1
# pick the second parameter or set it to be "dev"
PARAM2=$2 || "dev"
# check if bun is installed else use npm
if ! command -v bun &> /dev/null; then
    echo "Bun is not installed, using npm instead"
    runtime="npm"
    runner="npx"
else
    runtime="bun"
    runner="bunx"
fi

if [ "$PARAM1" == "serve" ]; then
    echo "Starting server..."
    cd next
    $runner serve out
    exit 0
fi

if [ "$PARAM1" == "next" ]; then
    echo "Starting next..."
    cd next
    # check if node_modules are installed with bun
    if [ ! -d "node_modules" ]; then
        $runtime install
    fi
    if [ "$PARAM2" == "build" ]; then
        $runtime run build
    else
        $runtime run $PARAM2
    fi

fi

if [ "$PARAM1" == "strapi" ]; then
    echo "Starting strapi..."
    cd strapi
    # check if node_modules are installed with bun
    if [ ! -d "node_modules" ]; then
        $runtime install
    fi

    # run docker compose up on background
    docker compose up -d
    $runtime run develop
fi
cd ..