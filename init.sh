PARAM1=$1

# check if bun is installed else use npm
if ! command -v bun &> /dev/null; then
    echo "Bun is not installed, using npm instead"
    runtime="npm"
else
    runtime="bun"
fi

if [ "$PARAM1" == "next" ]; then
    echo "Starting next..."
    cd next
    # check if node_modules are installed with bun
    if [ ! -d "node_modules" ]; then
        $runtime install
    fi
    $runtime run dev


elif [ "$PARAM1" == "strapi" ]; then
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

# go back to the root directory
cd ..
