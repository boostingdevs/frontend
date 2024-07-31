import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ChallengesService } from '../../core/services/challenges.service';
import { Challenge } from '../../core/types/challenge/challenge.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressBarService } from '../../core/services/progress-bar.service';


@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.scss'
})
export class ChallengesComponent implements OnInit {
  progressBarService = inject(ProgressBarService);

  public challengesP = "Ensinar é o melhor jeito de aprender.";
  public challengesH1 = "Aprenda colaborando com outras pessoas";
  public challengesBtn = "none";

  /* Filter Mobile */
  public mobile(): any {
    const btnMobile = document.getElementById('btnMobile') as HTMLButtonElement;
    const divFilter = document.querySelector('.challenges-section__filter-container') as HTMLDivElement;
    const divFilterMobile = document.querySelector('.challenges-section__mobile') as HTMLDivElement;
    const divFilterSearchDesktop = document.querySelector('.challenges-section__filter__search-bar') as HTMLDivElement;

    btnMobile.addEventListener('click', ()=> {
      if (divFilter.style.display === 'none') {
        divFilter.style.display = 'flex';
        divFilterMobile.style.display = 'flex'
        divFilterSearchDesktop.style.display = 'none'
      }
      else {
        divFilter.style.display = 'none'
      }
    })}

  /* Button close filter */
  public closeFilterMobile(): any {
    const closeFilter = document.getElementById('closeFilter') as HTMLButtonElement;
    const divFilter = document.querySelector('.challenges-section__filter-container') as HTMLDivElement;

    closeFilter.addEventListener('click', ()=> {
      if (divFilter.style.display = 'flex') {
        divFilter.style.display = 'none'
      }
    })
  }


  /**
   * Challenges Service DI
   */
  private challengesService = inject(ChallengesService)

  /**
   * Activated Route DI
   */
  private activatedRoute = inject(ActivatedRoute)

  /**
   * Router Service DI
   */
  private router = inject(Router)

  public challenges: Challenge[] = [];
  private immutableChallenges: Challenge[] = [];

  public filterCategories: string[] = [];
  public filterAreas: string[] = [];

  private filterAreasCache: string[] = [];
  private filterCategoriesCache: string[] = [];
  private filterStatusList: boolean[] = [];

  readonly DISCORD_INVITATION = 'https://discord.gg/nuhkGQRqSb';

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: ({ challenges }) => {
        this.challenges = challenges;
        this.immutableChallenges = challenges;

        challenges.map((challenge: Challenge) => (challenge.areas)).map((areas: string[]) => {
          areas.map(area => {
            if(!this.filterAreas.includes(area)) {
              this.filterAreas.push(area)
            }
          })
        });

        challenges.map((challenge: Challenge) => (challenge.categories)).map((categories: string[]) => {
          categories.map(category => {
            if(!this.filterCategories.includes(category)) {
              this.filterCategories.push(category)
            }
          })
        });
      },
      error: () => {

      }
    })
  }

  /**
   * Filter challenge by selected category
   * @param category
   * @param element
  */
  public filterChallengeByCategory(category: string, element: Event): void {
    this.filterCategoriesCache = this.mountFilterMemoryCache(this.filterCategoriesCache, category);
    this.challenges = this.mountFilteredList(this.immutableChallenges);
    this.changeFilterButtonStyleStatus(element);
  }

  /**
   * Filter challenge by selected area
   * @param area
   * @param element
   */
  public filterChallengeByArea(area: string, element: Event) {
    this.filterAreasCache = this.mountFilterMemoryCache(this.filterAreasCache, area);
    this.challenges = this.mountFilteredList(this.immutableChallenges);
    this.changeFilterButtonStyleStatus(element);
  }

  private mountFilterMemoryCache(filterCache: string[], filter: string): string[] {
    if(filterCache.includes(filter)) {
      return filterCache.filter((cache) => (cache !== filter));
    } else {
      filterCache.push(filter);

      return filterCache;
    }
  }

  public openChallengePage(id: number) {
    this.progressBarService.progressBarState.next(true);
    this.router.navigate(['challenge', id])
    .finally(() => {
      this.progressBarService.progressBarState.next(false);
    })
  }

  public searchChallenge(event: Event) {
    const target = event.target as HTMLInputElement;
    const searchableChallenges = this.mountFilteredList(this.immutableChallenges);
    this.challenges =  searchableChallenges.filter((challenge) => challenge.name.toLowerCase().includes(target.value.toLowerCase()))
  }

  private changeFilterButtonStyleStatus(element: Event) {
    const filterButton = element?.target as HTMLSpanElement;

    filterButton.classList.toggle('active');
  }

  private returnListWithSelectedItems(list: boolean[], challenge: Challenge): boolean[] {
    this.filterCategoriesCache.map((categoryCache: string) => {
      list.push(challenge.categories.includes(categoryCache));
    })

    this.filterAreasCache.map((areaCache: string) => {
      list.push(challenge.areas.includes(areaCache));
    })

    return list;
  }


  private mountFilteredList(immutableList: Challenge[]): Challenge[] {
    return immutableList.filter((challenge: Challenge) => {
      this.filterStatusList = [];

      this.filterStatusList = this.returnListWithSelectedItems(this.filterStatusList, challenge);

      if(this.filterStatusList.every(status => status)) {
        this.filterStatusList = [];
        return challenge;
      }

      return;
    })
  }

}
