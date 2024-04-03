<button
  onClick={async () => {
    try {
      await navigator.clipboard.writeText(
        'This function copies text to clipboards...'
      );
      console.log('Successfully copied to clipboard!');
    } catch (err) {
      console.log(`Clipboard could not copy: ${err}`);
    }
  }}
>
  Copy Me!
</button>;
