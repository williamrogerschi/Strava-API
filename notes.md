var currentAthlete = new Strava.Models.CurrentAthlete({"id":895809,"logged_in":true,"display_name":"Billy Rogers","first_name":"Billy","last_name":"Rogers","premium":false,"has_power_analysis_access":false,"photo_large":"https://dgalywyr863hv.cloudfront.net/pictures/athletes/895809/556905/7/large.jpg","photo":"https://dgalywyr863hv.cloudfront.net/pictures/athletes/895809/556905/7/large.jpg","badge":null,"measurement_preference":"feet","weight_measurement_unit":"lbs","type":0,"member_type":"","display_location":"Chicago, IL","gender":"M","geo":{"city":"Chicago","state":"IL","country":"United States","lat_lng":[41.94751550913038,-87.72410131067757]},"has_leaderboards_access":false,"has_pace_zone_analysis_access":false,"is_segments_restricted":true});
  HAML.globals = function() {
    return {
      currentAthlete: currentAthlete,
      renderPartial: function(name, context) {
        if (context == null) {
          context = this;
        }
        return JST[name](context);
      }
    }
  }

  var commentsController = new Strava.Lib.CommentsController();
  commentsController.setHash([]);
  var kudosController = new Strava.Lib.KudosController();
  var groupRideController = new Strava.Feed.GroupRideController();
  var lightboxData = {
    title: "Zwift - Pacer Group Ride: Tempus Fugit in Watopia with Maria",
    athlete_firstname: "Billy",
    athlete_name: "Billy Rogers",
    athlete_avatar: "https://dgalywyr863hv.cloudfront.net/pictures/athletes/895809/556905/7/medium.jpg",
    activity_type: "VirtualRide"
  }
  Strava.Feed.PopoverBoxActivityView.createInstance(commentsController, kudosController, groupRideController);


  var pageView;
  
  (function() {
    var privacyZones = [];
    var factory = new Strava.Labs.Activities.RideViewFactory();
    if (true) {
      factory.mapFactory(Strava.Maps.Mapbox.Construction.MapFactory);
    }
    var activityAthlete = new Strava.Models.Athlete({"id":895809,"logged_in":true,"display_name":"Billy Rogers","first_name":"Billy","last_name":"Rogers","premium":false,"has_power_analysis_access":false,"photo_large":"https://dgalywyr863hv.cloudfront.net/pictures/athletes/895809/556905/7/large.jpg","photo":"https://dgalywyr863hv.cloudfront.net/pictures/athletes/895809/556905/7/large.jpg","badge":null,"measurement_preference":"feet","weight_measurement_unit":"lbs","type":0,"member_type":"","display_location":"Chicago, IL","gender":"M","geo":{"city":"Chicago","state":"IL","country":"United States","lat_lng":[41.94751550913038,-87.72410131067757]},"has_leaderboards_access":false,"has_pace_zone_analysis_access":false,"is_segments_restricted":true});
    pageView = new Strava.Labs.Activities.Pages.RidePageView(9895352594, 'VirtualRide', factory)
      .commentsController(commentsController)
      .kudosController(kudosController)
      .isPremium(false)
      .hasGoalsAccess(false)
      .isOwner(true)
      .privacyZones(privacyZones)
      .usePrivacyStream(true)
      .hasPrivacyZonesAdmin(false)
      .currentAthlete(currentAthlete) // currentAthlete is global
      .activityAthlete(activityAthlete)
      .mbr([[-11.663621440529823,166.97605141438544],[-11.63798438385129,167.00278599746525]])
      .baseStream("distance")
      .lightboxData(lightboxData)
      .showGroupAthletes(true)
      .similarActivitiesData(null)
      .similarActivitiesFtueImagePath('https://d3nn82uaxijpm6.cloudfront.net/assets/application/activities/img_matched-run_FTUE-88ee369409d65a21695171ebd72789eaca5b44facd2d6885179aa1cecea75546.png')
      .canSeeTrainingPlans(true)
      .hasTrainingPlan(false)
      .hasCadenceOrTemp(true)
      .showStackedChart(true)
      .supportsGap(false)
      .showStats({"pace":true,"power":true,"heartrate":true,"speed":true})
      .taggingSignature(null)
      .segmentLeaderboardUpsellImagePath('https://d3nn82uaxijpm6.cloudfront.net/assets/segments/upsells/segment_detail_leaderboard_upsell-b8adc5c3e67b80bb30790072cbe70e83ebba0aa6dd5b4708ee10c72e24bf96b4.png')
      .temperatureUnitPreference("imperial")
      .shouldRenderActivityDetailsMapboxGlMap(false)
      .measurementUnits('imperial');
  })();
  
  pageView.activity().set({
    adjusting_elevation: false,
    map_start_index: 0
  });
