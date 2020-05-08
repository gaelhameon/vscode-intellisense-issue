class Foo {
  static StaticFooMethod() {
    console.log(`I'm a static foo method!`);
  }

  constructor(props) {
    this.bar = props.bar || 'defaultBar';
    this.baz = props.baz || 'defaultBaz';
  }

  fooMethod() {
    console.log(`I'm a foo and my bar is ${this.bar}`);
  }
}

Foo.staticProp = 'FooStaticProp';

module.exports = Foo;