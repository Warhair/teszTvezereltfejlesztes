QUnit.module("metodusok tesztelese", function () {
    QUnit.test("fizbuz letezik e", function(assert) {
        assert.ok(fizbuz, "Létezik a leptetes");
      }); 

    QUnit.test("fizbuz letezik e", function(assert) {
        assert.ok(typeof fizbuz == "function", "a leptetes fuggvény");
      });
      QUnit.test("fizbuz(0)", function(assert) {
        assert.equal(fizbuz(0), "");
      });
      QUnit.test("fizbuzErtek() [1,2,4,7,8,11,13,14]", function(assert) {
        const nemOszthatoLista=[1,2,4,7,8,11,13,14]
        for (let index = 0; index < nemOszthatoLista.length; index++) {
          assert.equal(fizbuzzErtek(nemOszthatoLista[index]), nemOszthatoLista[index]);
          
        }        
      });
      QUnit.test("fizbuzErtek() [3,6,9,12]", function(assert) {
        const nemOszthatoLista=[3,6,9,12];
        for (let index = 0; index < nemOszthatoLista.length; index++) {
          assert.equal(fizbuzzErtek(nemOszthatoLista[index]), "fizz");
          
        }
      });
      QUnit.test("fizbuzErtek() [5,10]", function(assert) {
        const nemOszthatoLista=[5, 10];
        for (let index = 0; index < nemOszthatoLista.length; index++) {
          assert.equal(fizbuzzErtek(nemOszthatoLista[index]), "buzz");
          
        }
      });
      QUnit.test("fizbuzErtek(15)", function(assert) {
        const nemOszthatoLista=[15];
        for (let index = 0; index < nemOszthatoLista.length; index++) {
          assert.equal(fizbuzzErtek(nemOszthatoLista[index]), "fizz buzz");
          
        }
        
      });
      QUnit.test("fizbuz(15)", function(assert) {
          assert.equal(fizbuz(15), "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizz buzz")
      });
});