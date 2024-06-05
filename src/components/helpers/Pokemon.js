const formatStats = (stats) => {
    const newStats = stats.map(({stat, base_stat})  => ({
        name: stat.name,
        base_stat,
        }));

        newStats.push({
            name: "total",
            base_stat: newStats.reduce((acc, stat) => stat.base_stat + acc, 0)
        })

console.log(newStats)

};

const formatTypes = (types) => types.map((type) => type.type.name);
const formatAbily = (abilities) => abilities.map((ability) => ability.ability.name);



export {formatStats, formatTypes, formatAbily};