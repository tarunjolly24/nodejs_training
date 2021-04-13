const pi=Math.PI;

const areaCircle=function name(r) {
    return pi*r*r;

}

const areaRectangle=function name(length,breadth) {
    return length*breadth;

}
const areaCyclinder=function name(r,h) {
    return pi*r*r*h;

}


module.exports={

    areaCircle,pi,areaRectangle,areaCyclinder
}
