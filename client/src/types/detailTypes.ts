export type ExpeditionDetail = {
  id: number;
  url: string;
  name: string;
  start: string;
  end: string | null;
  response_mode: string;
  spacestation: {
    id: number;
    url: string;
    name: string;
    image: {
      id: number;
      name: string;
      image_url: string;
      thumbnail_url: string;
      credit: string | null;
      license: {
        id: number;
        name: string;
        priority: number;
        link: string | null;
      };
      single_use: boolean;
      variants: {
        id: number;
        type: {
          id: number;
          name: string;
        };
        image_url: string;
      }[];
    } | null;
    status: {
      id: number;
      name: string;
    };
    founded: string;
    deorbited: string | null;
    description: string;
    orbit: string | null;
    type: {
      id: number;
      name: string;
    };
    owners:
      | {
          response_mode: string;
          id: number;
          url: string;
          name: string;
          abbrev: string;
          type: {
            id: number;
            name: string;
          };
          featured: boolean;
          country: {
            id: number;
            name: string;
            alpha_2_code: string;
            alpha_3_code: string;
            nationality_name: string;
            nationality_name_composed: string;
          }[];
          description: string | null;
          administrator: string | null;
          founding_year: number | null;
          launchers: string;
          spacecraft: string;
          parent: string | null;
          image: {
            id: number;
            name: string;
            image_url: string;
            thumbnail_url: string;
            credit: string | null;
            license: {
              id: number;
              name: string;
              priority: number;
              link: string | null;
            };
            single_use: boolean;
            variants: {
              id: number;
              type: {
                id: number;
                name: string;
              };
              image_url: string;
            }[];
          } | null;
          logo: {
            id: number;
            name: string;
            image_url: string;
            thumbnail_url: string;
            credit: string | null;
            license: {
              id: number;
              name: string;
              priority: number;
              link: string | null;
            };
            single_use: boolean;
            variants: {
              id: number;
              type: {
                id: number;
                name: string;
              };
              image_url: string;
            }[];
          } | null;
          social_logo: string | null;
        }[]
      | null;
  };
  mission_patches: {
    id: number;
    name: string;
    priority: number;
    image_url: string;
    agency: {
      response_mode: string;
      id: number;
      url: string;
      name: string;
      abbrev: string;
      type: {
        id: number;
        name: string;
      };
    } | null;
    response_mode: string;
  }[];
  spacewalks: {
    response_mode: string;
    id: number;
    url: string;
    name: string;
    start: string | null;
    end: string | null;
    duration: string | null;
    location: string | null;
  }[];
  crew: {
    id: number;
    role: {
      id: number;
      role: string;
      priority: number;
    };
    astronaut: {
      id: number;
      url: string;
      name: string;
      status: {
        id: number;
        name: string;
      };
      agency: {
        response_mode: string;
        id: number;
        url: string;
        name: string;
        abbrev: string;
        type: {
          id: number;
          name: string;
        };
      } | null;
      image: {
        id: number;
        name: string;
        image_url: string;
        thumbnail_url: string;
        credit: string | null;
        license: {
          id: number;
          name: string;
          priority: number;
          link: string | null;
        };
        single_use: boolean;
        variants: {
          id: number;
          type: {
            id: number;
            name: string;
          };
          image_url: string;
        }[];
      } | null;
      response_mode: string;
      type: {
        id: number;
        name: string;
      };
      in_space: boolean;
      time_in_space: string | null;
      eva_time: string | null;
      age: number | null;
      date_of_birth: string | null;
      date_of_death: string | null;
      nationality: {
        id: number;
        name: string;
        alpha_2_code: string;
        alpha_3_code: string;
        nationality_name: string;
        nationality_name_composed: string;
      }[];
      bio: string;
      wiki: string | null;
      last_flight: string | null;
      first_flight: string | null;
      social_media_links: {
        id: number;
        social_media: {
          id: number;
          name: string;
          url: string | null;
          logo: {
            id: number;
            name: string;
            image_url: string;
            thumbnail_url: string;
            credit: string | null;
            license: {
              id: number;
              name: string;
              priority: number;
              link: string | null;
            };
            single_use: boolean;
            variants: {
              id: number;
              type: {
                id: number;
                name: string;
              };
              image_url: string;
            }[];
          } | null;
        };
        url: string | null;
      }[];
    };
  }[];
};
export type LaunchesDetail = {
  name: string;

  image?: {
    image_url?: string;
    name: string;
  };

  net: string;
  net_precision: {
    description: string;
  };

  status: {
    name: string;
    description: string;
  };

  mission: {
    name: string;
    description: string;
    type: string;
    orbit: {
      name: string;
      abbrev: string;
      celestial_body: {
        name: string;
      };
    };
  };

  launch_service_provider: {
    administrator: string;
    name: string;
    description: string;
    abbrev: string;
    wiki_url: string;

    image?: {
      image_url?: string;
    };

    logo: {
      thumbnail_url: string;
      name: string;
    };
  };
  pad: {
    name: string;
    country: {
      name: string;
      alpha_3_code: string;
    };
    image: {
      image_url: string;
      name: string;
    };
    location: {
      longitude: number;
      latitude: number;
      description?: string;
    };
    map_url?: string;
  };

  rocket: {
    configuration: {
      full_name: string;
      manufacturer: {
        abbrev: string;
      };
      description?: string;
    };
  };
  vid_urls: [
    url: string,
    feature_image: string,
    live: boolean,
    type: {
      name: string;
    }
  ];
};
export type LauncherConfigDetail = {
  response_mode: string;
  id: number;
  url: string;
  name: string;
  families: {
    response_mode: string;
    id: number;
    name: string;
    manufacturer: {
      response_mode: string;
      id: number;
      url: string;
      name: string;
      abbrev: string;
      type: {
        id: number;
        name: string;
      };
      featured: boolean;
      country: {
        id: number;
        name: string;
        alpha_2_code: string;
        alpha_3_code: string;
        nationality_name: string;
        nationality_name_composed: string;
      }[];
      description: string | null;
      administrator: string | null;
      founding_year: number | null;
      launchers: string;
      spacecraft: string;
      parent: string | null;
      image: {
        id: number;
        name: string;
        image_url: string;
        thumbnail_url: string;
        credit: string | null;
        license: {
          id: number;
          name: string;
          priority: number;
          link: string | null;
        };
        single_use: boolean;
        variants: {
          id: number;
          type: {
            id: number;
            name: string;
          };
          image_url: string;
        }[];
      } | null;
      logo: {
        id: number;
        name: string;
        image_url: string;
        thumbnail_url: string;
        credit: string | null;
        license: {
          id: number;
          name: string;
          priority: number;
          link: string | null;
        };
        single_use: boolean;
        variants: {
          id: number;
          type: {
            id: number;
            name: string;
          };
          image_url: string;
        }[];
      } | null;
      social_logo: {
        id: number;
        name: string;
        image_url: string;
        thumbnail_url: string;
        credit: string | null;
        license: {
          id: number;
          name: string;
          priority: number;
          link: string | null;
        };
        single_use: boolean;
        variants: {
          id: number;
          type: {
            id: number;
            name: string;
          };
          image_url: string;
        }[];
      } | null;
      total_launch_count: number | null;
      consecutive_successful_launches: number | null;
      successful_launches: number | null;
      failed_launches: number | null;
      pending_launches: number | null;
      consecutive_successful_landings: number | null;
      successful_landings: number | null;
      failed_landings: number | null;
      attempted_landings: number | null;
      successful_landings_spacecraft: number | null;
      failed_landings_spacecraft: number | null;
      attempted_landings_spacecraft: number | null;
      successful_landings_payload: number | null;
      failed_landings_payload: number | null;
      attempted_landings_payload: number | null;
      info_url: string | null;
      wiki_url: string | null;
      social_media_links: {
        id: number;
        social_media: {
          id: number;
          name: string;
          url: string | null;
          logo: {
            id: number;
            name: string;
            image_url: string;
            thumbnail_url: string;
            credit: string | null;
            license: {
              id: number;
              name: string;
              priority: number;
              link: string | null;
            };
            single_use: boolean;
            variants: {
              id: number;
              type: {
                id: number;
                name: string;
              };
              image_url: string;
            }[];
          } | null;
        };
        url: string | null;
      }[];
    }[];
    parent: {
      response_mode: string;
      id: number;
      name: string;
      manufacturer: {
        response_mode: string;
        id: number;
        url: string;
        name: string;
        abbrev: string;
        type: {
          id: number;
          name: string;
        };
        featured: boolean;
        country: {
          id: number;
          name: string;
          alpha_2_code: string;
          alpha_3_code: string;
          nationality_name: string;
          nationality_name_composed: string;
        }[];
        description: string | null;
        administrator: string | null;
        founding_year: number | null;
        launchers: string;
        spacecraft: string;
        parent: string | null;
        image: {
          id: number;
          name: string;
          image_url: string;
          thumbnail_url: string;
          credit: string | null;
          license: {
            id: number;
            name: string;
            priority: number;
            link: string | null;
          };
          single_use: boolean;
          variants: {
            id: number;
            type: {
              id: number;
              name: string;
            };
            image_url: string;
          }[];
        } | null;
        logo: {
          id: number;
          name: string;
          image_url: string;
          thumbnail_url: string;
          credit: string | null;
          license: {
            id: number;
            name: string;
            priority: number;
            link: string | null;
          };
          single_use: boolean;
          variants: {
            id: number;
            type: {
              id: number;
              name: string;
            };
            image_url: string;
          }[];
        } | null;
        social_logo: {
          id: number;
          name: string;
          image_url: string;
          thumbnail_url: string;
          credit: string | null;
          license: {
            id: number;
            name: string;
            priority: number;
            link: string | null;
          };
          single_use: boolean;
          variants: {
            id: number;
            type: {
              id: number;
              name: string;
            };
            image_url: string;
          }[];
        } | null;
      }[];
      parent: {
        response_mode: string;
        id: number;
        name: string;
      } | null;
    } | null;
    description: string;
    active: boolean;
    maiden_flight: string | null;
    total_launch_count: number | null;
    consecutive_successful_launches: number | null;
    successful_launches: number | null;
    failed_launches: number | null;
    pending_launches: number | null;
    attempted_landings: number | null;
    successful_landings: number | null;
    failed_landings: number | null;
    consecutive_successful_landings: number | null;
  }[];
  full_name: string;
  variant: string;
  active: boolean;
  is_placeholder: boolean;
  manufacturer: {
    response_mode: string;
    id: number;
    url: string;
    name: string;
    abbrev: string;
    type: {
      id: number;
      name: string;
    };
    featured: boolean;
    country: {
      id: number;
      name: string;
      alpha_2_code: string;
      alpha_3_code: string;
      nationality_name: string;
      nationality_name_composed: string;
    }[];
    description: string | null;
    administrator: string | null;
    founding_year: number | null;
    launchers: string;
    spacecraft: string;
    parent: string | null;
    image: {
      id: number;
      name: string;
      image_url: string;
      thumbnail_url: string;
      credit: string | null;
      license: {
        id: number;
        name: string;
        priority: number;
        link: string | null;
      };
      single_use: boolean;
      variants: {
        id: number;
        type: {
          id: number;
          name: string;
        };
        image_url: string;
      }[];
    } | null;
    logo: {
      id: number;
      name: string;
      image_url: string;
      thumbnail_url: string;
      credit: string | null;
      license: {
        id: number;
        name: string;
        priority: number;
        link: string | null;
      };
      single_use: boolean;
      variants: {
        id: number;
        type: {
          id: number;
          name: string;
        };
        image_url: string;
      }[];
    } | null;
    social_logo: {
      id: number;
      name: string;
      image_url: string;
      thumbnail_url: string;
      credit: string | null;
      license: {
        id: number;
        name: string;
        priority: number;
        link: string | null;
      };
      single_use: boolean;
      variants: {
        id: number;
        type: {
          id: number;
          name: string;
        };
        image_url: string;
      }[];
    } | null;
    total_launch_count: number | null;
    consecutive_successful_launches: number | null;
    successful_launches: number | null;
    failed_launches: number | null;
    pending_launches: number | null;
    consecutive_successful_landings: number | null;
    successful_landings: number | null;
    failed_landings: number | null;
    attempted_landings: number | null;
    successful_landings_spacecraft: number | null;
    failed_landings_spacecraft: number | null;
    attempted_landings_spacecraft: number | null;
    successful_landings_payload: number | null;
    failed_landings_payload: number | null;
    attempted_landings_payload: number | null;
    info_url: string | null;
    wiki_url: string | null;
    social_media_links: {
      id: number;
      social_media: {
        id: number;
        name: string;
        url: string | null;
        logo: {
          id: number;
          name: string;
          image_url: string;
          thumbnail_url: string;
          credit: string | null;
          license: {
            id: number;
            name: string;
            priority: number;
            link: string | null;
          };
          single_use: boolean;
          variants: {
            id: number;
            type: {
              id: number;
              name: string;
            };
            image_url: string;
          }[];
        } | null;
      };
      url: string | null;
    }[];
  } | null;
  program: {
    response_mode: string;
    id: number;
    url: string;
    name: string;
    image: {
      id: number;
      name: string;
      image_url: string;
      thumbnail_url: string;
      credit: string | null;
      license: {
        id: number;
        name: string;
        priority: number;
        link: string | null;
      };
      single_use: boolean;
      variants: {
        id: number;
        type: {
          id: number;
          name: string;
        };
        image_url: string;
      }[];
    } | null;
    info_url: string | null;
    wiki_url: string | null;
    description: string | null;
    agencies: {
      response_mode: string;
      id: number;
      url: string;
      name: string;
      abbrev: string;
      type: {
        id: number;
        name: string;
      };
    }[];
    start_date: string | null;
    end_date: string | null;
    mission_patches: {
      id: number;
      name: string;
      priority: number;
      image_url: string;
      agency: {
        response_mode: string;
        id: number;
        url: string;
        name: string;
        abbrev: string;
        type: {
          id: number;
          name: string;
        };
      } | null;
      response_mode: string;
    }[];
    type: {
      id: number;
      name: string;
    };
  }[];
  reusable: boolean;
  image: {
    id: number;
    name: string;
    image_url: string;
    thumbnail_url: string;
    credit: string | null;
    license: {
      id: number;
      name: string;
      priority: number;
      link: string | null;
    };
    single_use: boolean;
    variants: {
      id: number;
      type: {
        id: number;
        name: string;
      };
      image_url: string;
    }[];
  } | null;
  info_url: string | null;
  wiki_url: string | null;
  description: string;
  alias: string;
  min_stage: number | null;
  max_stage: number | null;
  length: number | null;
  diameter: number | null;
  maiden_flight: string | null;
  launch_cost: number | null;
  launch_mass: number | null;
  leo_capacity: number | null;
  gto_capacity: number | null;
  geo_capacity: number | null;
  sso_capacity: number | null;
  to_thrust: number | null;
  apogee: number | null;
  total_launch_count: number | null;
  consecutive_successful_launches: number | null;
  successful_launches: number | null;
  failed_launches: number | null;
  pending_launches: number | null;
  attempted_landings: number | null;
  successful_landings: number | null;
  failed_landings: number | null;
  consecutive_successful_landings: number | null;
  fastest_turnaround: string | null;
};
