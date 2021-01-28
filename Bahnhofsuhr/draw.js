var clock = new StationClock("clock");
      clock.body = StationClock.RoundBody;
      clock.dial = StationClock.SwissStrokeDial;
      clock.hourHand = StationClock.SwissHourHand;
      clock.minuteHand = StationClock.SwissMinuteHand;
      clock.secondHand = StationClock.SwissSecondHand;
      clock.boss = StationClock.NoBoss;
      clock.minuteHandBehavoir = StationClock.BouncingMinuteHand;
      clock.secondHandBehavoir = StationClock.OverhastySecondHand;

      animate();

      function animate() {
        clock.draw();
        window.setTimeout("animate()", 50);
      }
