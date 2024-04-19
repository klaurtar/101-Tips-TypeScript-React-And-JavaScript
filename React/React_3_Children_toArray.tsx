{
  React.Children.toArray(
    ['one', 'two', 'three'].map((item) => {
      return <div>{item}</div>;
    })
  );
}
