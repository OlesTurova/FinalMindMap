import { ComponentRef, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  Route,
  RouteReuseStrategy,
} from '@angular/router';



export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();


  /**
   * Determines if this route (and its subtree) should be detached to be reused later
   */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig!.path === 'list';
  }

  /**
   * Stores the detached route. Storing a null value should erase the previously stored value.
   */
  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandleExt
  ): void {
    this.storedRoutes.set(route.routeConfig!.path!, handle);
  }

  /**
   * Determines if this route (and its subtree) should be reattached
   */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.storedRoutes.get(route.routeConfig!.path!);
  }

  /**
   * Retrieves the previously stored route
   */
  public retrieve(
    route: ActivatedRouteSnapshot
  ): DetachedRouteHandle | null {
    return this.storedRoutes.get(route.routeConfig!.path!) as DetachedRouteHandle;
  }

  /**
   * Determines if a route should be reused
   */
  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}

interface DetachedRouteHandleExt extends DetachedRouteHandle {
  componentRef: ComponentRef<any>;
}
