function State3() {

}
State3.prototype=Object.assign({}, BaseState.prototype);

State3.prototype.stateChange=function (objectContext) {
    if(typeof objectContext===typeof this){
        objectContext.number+=4;

        objectContext.stateName="State3";
        document.getElementById("statepatternlog").innerHTML=document.getElementById("statepatternlog").innerHTML.toString()+"<br>".toString()+JSON.stringify(objectContext).toString();

        objectContext.state=new State1();
    }
}