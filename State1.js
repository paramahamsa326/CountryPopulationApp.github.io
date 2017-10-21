function State1() {

}
State1.prototype=Object.assign({}, BaseState.prototype);

State1.prototype.stateChange=function (objectContext) {
    if(typeof objectContext===typeof this){
        objectContext.number+=2;
        objectContext.stateName="State1";
        document.getElementById("statepatternlog").innerHTML=document.getElementById("statepatternlog").innerHTML.toString()+"<br>".toString()+JSON.stringify(objectContext).toString();
        console.log(JSON.stringify(objectContext));
        objectContext.state=new State2();
    }
}