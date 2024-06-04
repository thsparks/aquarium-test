/**
 * Custom blocks
 */
//% color=#FA1234 icon=""
namespace zoo {
    
    //% block="build glow squid tank of size $size"
    //% size.defl=6
    //% size.min=6 size.max=100
    export function aquarium(size: number) {
        blocks.fill(GLASS, pos(0, 0, 0), pos(size, size, size), FillOperation.Replace);
        blocks.fill(WATER, pos(1, 1, 1), pos(size-1, size-1, size-1), FillOperation.Replace);
        mobs.spawn(GLOW_SQUID, pos(size/2, size/2, size/2));
    }

}
