Java.perform(function () {

    // var crack1 = Java.use("sg.vantagepoint.uncrackable1.MainActivity");
    // crack1.onCreate().implementation = function (v1) {
    //     console.log("HOOKED");
    //     // super.onCreate(v1)
    //     // this.setcontenView(0x7F030000)
    //
    // };

    // var crack1 = Java.use("java.lang.System");
    // crack1.exit.implementation = function () {
    //     console.log("HOOKED");
    //     // super.onCreate(v1)
    //     // this.setcontenView(0x7F030000)
    //
    // };

    var a = Java.use("sg.vantagepoint.a.c");
    a.a.implementation = function () {
        console.log("hook a.a");
        console.log(this.a());
        return false;

    };

    a.b.implementation = function () {
        console.log("hook a.b");
        console.log(this.b());
        return false;

    };
    a.c.implementation = function () {
        console.log("hook a.c");
        console.log(this.c());
        return false;

    };


    //
    // var crack1 = Java.use("sg.vantagepoint.uncrackable1.MainActivity");
    // crack1.onCreate.implementation = function (v1) {
    //     console.log("HOOKED111");
    //     console.log(v1);
    //     this.super.onCreate(v1);
    //     setContentView(R.layout.activity_main);
    //     // super.onCreate(v1)
    //     // this.setcontenView(0x7F030000)
    //
    // };
    //
    // function bin2String(array) {
    //     var result = "";
    //     for (var i = 0; i < array.length; i++) {
    //         result += String.fromCharCode(array[i]);
    //     }
    //     return result;
    // }
    //
    // var crack1 = Java.use("sg.vantagepoint.a.a");
    // crack1.a.implementation = function (v1,v2 ) {
    //     console.log("a.b HOOKED");
    //
    //     var result = this.a(v1,v2)
    //     console.log(bin2String(result));
    //
    //
    //     return result;
    // };
});